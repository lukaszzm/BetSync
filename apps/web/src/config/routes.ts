const API_ROUTES = {
  apiSignIn: "/auth/sign-in",
  apiSignUp: "/auth/sign-up",
  refreshToken: "/auth/refresh",
  bet: "/bet",
  lastBet: "/bet/last",
  best: "/bet/best",
  userInfo: "/user/me",
  userLimit: "/user/limit",
  bookmaker: "/bookmaker",
} as const satisfies Record<string, string>;

const APP_ROUTES = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  dashboard: "/dashboard",
  bets: "/dashboard/bets",
} as const satisfies Record<string, string>;

export const ROUTES = {
  ...API_ROUTES,
  ...APP_ROUTES,
};
