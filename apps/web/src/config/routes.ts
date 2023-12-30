const API_ROUTES = {
  signIn: "/auth/sign-in",
  refreshToken: "/auth/refresh",
} as const satisfies Record<string, string>;

const APP_ROUTES = {
  home: "/",
} as const satisfies Record<string, string>;

export const ROUTES = {
  ...API_ROUTES,
  ...APP_ROUTES,
};
