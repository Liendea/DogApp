// backend/src/server.ts
import "dotenv/config";
import { validateEnv } from "./config/env.js";

validateEnv();

import app from "./app.js";
import { prisma } from "./lib/prisma.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
  console.log(`Enviroment: ${env.NODE_ENV}`);
  env.NODE_ENV === "development"
    ? console.log(`Database: ${env.DATABASE_URL.split("@")[1]}`)
    : "";
});

const shutdown = async (signal: String): Promise<void> => {
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

process.stdin.on("data", (data) => {
    const input = data.toString().trim().toLowerCase();
    if (
      [
        "quit",
        "close",
        "bye",
        "exit",
        "ciao",
        "hasta la vista",
        "vi ses",
      ].includes(input)
    ) {
      shutdown("stdin");
    }
  });
