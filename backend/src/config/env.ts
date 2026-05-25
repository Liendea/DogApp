// backend/src/config/env.ts
import dotenv from "dotenv";

// ––– Determine enviroment –––
const environment = process.env.NODE_ENV ?? "development";

// ––– Load correct .env file –––
// Railway sets env vars directly; dotenv is a no-op there (file won't exist).
dotenv.config({
  path: `.env.${environment}`,
});

// ––– Required env vars –––
const requiredEnvVars = ["DATABASE_URL", "FRONTEND_URL"] as const;

type RequiredEnvVars = (typeof requiredEnvVars)[number];

/**
 * Validates that all required environment variables are set.
 * Called once at server startup — throws if any are missing so the
 * process fails fast with a clear error instead of a cryptic runtime crash.
 */
export const validateEnv = (): void => {
  const missing = requiredEnvVars.filter(
    (key: RequiredEnvVars) => !process.env[key],
  );

  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
  console.log(`Environment loaded: ${environment}.`);
  console.log("All environment variables are present.");
};

// ––– Types env object –––
export const env = {
  NODE_ENV: environment,
  PORT: Number(process.env.PORT) || 3000,
  DATABASE_URL: process.env.DATABASE_URL!,
  FRONTEND_URL: process.env.FRONTEND_URL!,
} as const;
