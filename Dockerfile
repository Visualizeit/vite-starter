# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.1-alpine AS base
WORKDIR /app

# install dependencies
FROM base AS install
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# copy node_modules from install stage
FROM base AS prerelease
WORKDIR /app
COPY --from=install /app/node_modules ./node_modules
COPY . .

# build the app
ENV NODE_ENV production
RUN bun run build

# Set up Caddy
FROM caddy:2.8.4-alpine AS caddy
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=prerelease /app/dist /usr/share/caddy

# Run the app using Caddy
ENTRYPOINT ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]