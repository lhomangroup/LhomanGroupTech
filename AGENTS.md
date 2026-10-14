# Working on this repo

## What this app is

A French marketing site ("Lhoman Group Technologies") — React + Vite + Tailwind
frontend, Express API, Postgres via Drizzle. Single process: `server/index.ts`
starts Express on port **5000** and mounts the Vite dev server as middleware, so
one port serves both the API and the frontend.

## Running it (Base44 sandbox)

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- The preview entry point is host port **3000** → container port 5000.
- `migrate` is a one-shot service that installs dependencies and runs
  `drizzle-kit push` (`shared/schema.ts` → database) before the app starts.
  Re-run it after changing the schema:
  `docker compose -f docker-compose.base44.yml up -d migrate`.
- Dependencies are installed into the bind-mounted repo (`node_modules/`) at
  container start with `npm ci`, so `package.json`/`package-lock.json` changes
  need a container restart, not an image rebuild.
- Hot reload works: Vite HMR for `client/`, `tsx watch` restarts on `server/`.

## Non-obvious things that will bite you

- **The database driver is not a normal driver.** `server/db.ts` uses
  `@neondatabase/serverless`, which reaches Postgres over a WebSocket tunnel and
  cannot open a plain TCP connection. In the sandbox, a local Postgres is exposed
  through Neon's `wsproxy` relay (a compose service) and `server/db.ts` points
  the driver at it — but only when `BASE44_PREVIEW_MODE === "1"`. With the flag
  unset, hosted Neon behaves exactly as before. That block is the only
  sandbox-specific code in the repo.
- `wsproxy` only serves the tunnel at `/v1` on port 80 and only dials
  destinations matching `ALLOW_ADDR_REGEX` (set to `^db:5432$`), which is why
  `db.ts` sets `wsProxy`, `useSecureWebSocket = false` and
  `pipelineConnect = false` rather than just a `DATABASE_URL`.
- **The contact form does not call the API.** `client/src/components/ui/contact.tsx`
  simulates the submission client-side (`setTimeout`) and shows a success toast.
  `POST /api/contact` exists and writes to `contact_inquiries`, but nothing in
  the UI calls it — do not read a passing toast as proof the API or database work.
- `client/index.html` originally loaded a Replit dev-banner script from
  replit.com; outside Replit it fails (`ERR_BLOCKED_BY_ORB`) and logs a console
  error on every page load, so it was removed. Don't re-add it.
- `DATABASE_URL` is hardcoded to `localhost:5432` in the `npm run dev` script, so
  that script cannot be used in the container. Compose runs
  `npx tsx watch server/index.ts` directly instead.

## Verifying it works

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/            # 200, live Vite source
curl -s http://localhost:3000/api/contact                                  # JSON array, needs Postgres
curl -s -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"firstName":"a","lastName":"b","email":"c@d.e","description":"test"}'   # {"success":true,...}
```

The API exposes no DELETE route, so remove test rows with
`docker compose -f docker-compose.base44.yml exec -T db psql -U postgres -d postgres
-c "DELETE FROM contact_inquiries WHERE id = <id>"`.

The compose `app` healthcheck already probes both the frontend (`/`) and the API
(`/api/contact`, which exercises Postgres through the relay).

## Not needed in the sandbox

No external credentials: Postgres is local and there are no third-party API
integrations, so nothing here requires a `set_secrets` value.
