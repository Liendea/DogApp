// backend/src/server.ts
import { validateEnv, env } from "./config/env.js";

validateEnv();

import app from "./app.js";
import { prisma } from "./lib/prisma.js";

// ── Start server ─────────────────────────────────
const server = app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);

  console.log(`Environment: ${env.NODE_ENV}`);

  // Never log DB credentials
  if (env.NODE_ENV === "development") {
    try {
      const dbUrl = new URL(env.DATABASE_URL);

      console.log(
        `Database: ${dbUrl.hostname}:${dbUrl.port}/${dbUrl.pathname.replace("/", "")}`,
      );
    } catch {
      console.log("Database URL loaded");
    }
  }
});

// ── Graceful shutdown ────────────────────────────
const shutdown = async (signal: string): Promise<void> => {
  console.log(`\n${signal} received – shutting down gracefully...`);

  try {
    await prisma.$disconnect();

    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  } catch (error) {
    console.error("Error during shutdown:", error);

    process.exit(1);
  }
};

// Railway / Docker shutdown signals
process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});

process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

// ── Dev-only convenience ─────────────────────────
// Railway has no TTY, so stdin is unavailable there
if (process.stdin.isTTY) {
  const STOP_WORDS = new Set([
    "quit",
    "close",
    "bye",
    "exit",
    "ciao",
    "hasta la vista",
    "vi ses",
  ]);

  process.stdin.on("data", (data: Buffer) => {
    const input = data.toString().trim().toLowerCase();

    if (STOP_WORDS.has(input)) {
      void shutdown("stdin");
    }
  });
}
