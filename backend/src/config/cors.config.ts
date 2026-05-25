// backend/src/config/cors.config.ts
import type { CorsOptions } from "cors";
import { env } from "./env.js";

const allowedOrigins: string[] = ["http://localhost:5173", env.FRONTEND_URL];

/**
 * CORS configuration.
 * Requests without an Origin header (Postman, curl, server-to-server) are
 * always allowed. Add more origins to allowedOrigins when needed.
 */
export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header (Postman, curl, internal calls)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) return callback(null, true);

    return callback(new Error(`Origin "${origin}" not allowed by CORS`));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false, // Set to true when session/cookie auth is added
};
