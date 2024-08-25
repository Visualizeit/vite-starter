# use the official Bun image
FROM oven/bun:1.1-alpine AS base
WORKDIR /app

# install dependencies
FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# build the app
FROM deps AS build
COPY . .
ENV NODE_ENV production
RUN bun run build

# Run the app using Caddy
FROM caddy:2.8.4-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /usr/share/caddy
ENTRYPOINT ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]