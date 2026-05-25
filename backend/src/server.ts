// backend/src/server.ts
import { validateEnv, env } from "./config/env.js";

validateEnv();

import app from "./app.js";
import { prisma } from "./lib/prisma.js";

const server = app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
  console.log(`Enviroment: ${env.NODE_ENV}`);
  if (env.NODE_ENV === "development") {
    // Only show the host/port portion of the URL – never log credentials
    console.log(`Database: ${env.DATABASE_URL.split("@")[1]}`);
  }
});

const shutdown = async (signal: string): Promise<void> => {
  console.log(`\n ${signal} received – shutting down gracefully...`);
  await prisma.$disconnect();
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});
process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

// ––– Dev-only convenience: type a word to stop the server –––
// Railway has no TTY, so process.stdin.isTTY is falsy there — guard required.
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
    if (STOP_WORDS.has(data.toString().trim().toLowerCase())) {
      void shutdown("stdin");
    }
  });
}
