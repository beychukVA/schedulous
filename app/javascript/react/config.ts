export const environment = {
  isTest: process.env.NODE_ENV === "test",
  isProduction: process.env.NODE_ENV === "production",
  isBrowser: typeof window !== "undefined",
};

export const GRAPHQL_URI = "/graphql";
