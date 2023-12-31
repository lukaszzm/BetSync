import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./config/routes";
import { type JWT, encode, getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { apiFetch } from "./utils/apiFetch";

const isHttps = process.env.NEXTAUTH_URL?.startsWith("https://");

const sessionCookie = isHttps ? "__Secure-next-auth.session-token" : "next-auth.session-token";

const refreshTokenError = "RefreshAccessTokenError"; // error message to identify refresh token error
const size = 3933; // maximum size of each chunk
const regex = new RegExp(".{1," + size + "}", "g"); // regex to split the token into chunks

function signOut(req: NextRequest) {
  const response = NextResponse.redirect(new URL(ROUTES.home, req.url));

  req.cookies.getAll().forEach(cookie => {
    if (cookie.name.includes("next-auth.session-token")) {
      response.cookies.delete(cookie.name);
    }
  });

  return response;
}

function shouldUpdateToken(token: JWT) {
  return new Date().getTime() > token.tokens.expiresIn;
}

async function refreshToken(token: JWT): Promise<JWT> {
  try {
    const res = await apiFetch(ROUTES.refreshToken, {
      method: "POST",
      headers: {
        authorization: `Refresh ${token.tokens.refresh_token}`,
      },
    });

    const tokens = await res.json();

    if (!res.ok) {
      throw tokens;
    }

    return {
      ...token,
      tokens,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return {
      ...token,
      error: refreshTokenError,
    };
  }
}

function updateCookie(sessionToken: string, request: NextRequest, response: NextResponse) {
  // split the token into chunks
  const tokenChunks = sessionToken.match(regex);
  const isTokenChunked = tokenChunks && tokenChunks.length > 1;

  // set request cookies for the incoming getServerSession to read new session
  if (isTokenChunked) {
    tokenChunks.forEach((chunk, index) => {
      request.cookies.set(`${sessionCookie}.${index}`, chunk);
    });
  } else {
    request.cookies.set(sessionCookie, sessionToken);
  }

  // updated request cookies can only be passed to server if its passdown here after setting its updates
  response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // set response cookies to send back to browser
  if (isTokenChunked) {
    tokenChunks.forEach((chunk, index) => {
      response.cookies.set(`${sessionCookie}.${index}`, chunk, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60,
        secure: isHttps,
        sameSite: "lax",
      });
    });
  } else {
    response.cookies.set(sessionCookie, sessionToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60,
      secure: isHttps,
      sameSite: "lax",
    });
  }

  return response;
}

async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  if (!token) {
    return signOut(request);
  }

  let response = NextResponse.next();

  if (shouldUpdateToken(token)) {
    const newToken = await refreshToken(token);

    if (newToken.error === refreshTokenError) {
      return signOut(request);
    }

    const newSessionToken = await encode({
      secret: process.env.NEXTAUTH_SECRET!,
      token: newToken,
      maxAge: 30 * 24 * 60 * 60,
    });

    response = updateCookie(newSessionToken, request, response);
  }

  return response;
}

export default withAuth(middleware);

export const config = { matcher: ["/dashboard/:path*"] };
