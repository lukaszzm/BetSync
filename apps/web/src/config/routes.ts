const API_ROUTES = {
  apiSignIn: "/auth/sign-in",
  refreshToken: "/auth/refresh",
} as const satisfies Record<string, string>;

const APP_ROUTES = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  dashboard: "/dashboard",
} as const satisfies Record<string, string>;

export const ROUTES = {
  ...API_ROUTES,
  ...APP_ROUTES,
};
