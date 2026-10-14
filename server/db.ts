import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Base44 preview sandbox only. The sandbox database is a local Postgres, and
// this driver reaches Postgres over a WebSocket tunnel rather than TCP, so it
// has to be pointed at the local `wsproxy` relay (see
// docker-compose.base44.yml) instead of a hosted Neon endpoint: the relay
// serves the tunnel at /v1 over plain ws://, and local Postgres authenticates
// without the driver's pipelined password exchange. With the flag unset, or
// set to any other value, hosted Neons keep working exactly as before.
if (process.env.BASE44_PREVIEW_MODE === "1") {
  const { hostname, port } = new URL(process.env.DATABASE_URL);
  const relay = process.env.NEON_WS_PROXY ?? "wsproxy";
  neonConfig.wsProxy = () => `${relay}/v1?address=${hostname}:${port || 5432}`;
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineConnect = false;
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });