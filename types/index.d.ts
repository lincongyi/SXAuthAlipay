interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

declare interface ViteEnv {
  NODE_ENV: "development" | "production";
  VITE_AUTH_BASE_URL: string;
  VITE_PROXY_AUTH_BASE_URL?: string;
  VITE_DEMO_BASE_URL: string;
  VITE_PROXY_DEMO_BASE_URL?: string;
  VITE_CLIENT_ID: "dabby_dev_al";
  VITE_CLIENT_SECRET: "dabby_dev_al";
  VITE_SERVICE_AGREEMENT: string;
}
