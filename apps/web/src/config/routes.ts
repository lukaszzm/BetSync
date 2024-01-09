const API_ROUTES = {
  apiSignIn: "/auth/sign-in",
  apiSignUp: "/auth/sign-up",
  refreshToken: "/auth/refresh",
  bet: "/bet",
  lastBet: "/bet/last",
  best: "/bet/best",
  updateStatus: "/bet/status",
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

export const RoutePaths = {
  ...API_ROUTES,
  ...APP_ROUTES,
};
