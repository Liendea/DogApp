// backend/src/config/env.ts

const requiredEnvVars = ["DATABASE_URL"] as const;

/**
 * Validates that all required environment variables are set.
 * Called once at server startup — throws if any are missing so the
 * server never starts in a broken or unauthenticated state.
 */
export const validateEnv = (): void => {
  const missing = requiredEnvVars.filter((v) => !process.env[v]);
  if (missing.length > 0) {
    throw new Error(`Saknade miljövariabler: ${missing.join(", ")}`);
  }
  console.log("Alla miljövariabler finns.");
};

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL: process.env.DATABASE_URL!,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
} as const;
