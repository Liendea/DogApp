// backend/src/config/env.ts
import dotenv from "dotenv";

// tsx already injects .env automatically in dev.
// This call is a safety net for environments where tsx is not used.
dotenv.config();

const requiredEnvVars = ["DATABASE_URL", "FRONTEND_URL"] as const;
type RequiredEnvVars = (typeof requiredEnvVars)[number];

export const validateEnv = (): void => {
  const missing = requiredEnvVars.filter(
    (key: RequiredEnvVars) => !process.env[key],
  );
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
  console.log(`Environment: ${process.env.NODE_ENV ?? "development"}`);
  console.log("All environment variables are present.");
};

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT) || 3000,
  DATABASE_URL: process.env.DATABASE_URL!,
  FRONTEND_URL: process.env.FRONTEND_URL!,
} as const;
