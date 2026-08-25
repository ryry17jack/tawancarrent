# syntax=docker/dockerfile:1

# Debian slim rather than alpine: sharp (an Astro dependency) ships prebuilt
# glibc binaries, so there is nothing to compile at install time.
FROM node:22-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci


# ── dev ─────────────────────────────────────────────────────────────
# Source is bind-mounted over /app by compose; node_modules is kept in a
# named volume so the container's Linux binaries survive the mount.
FROM node:22-bookworm-slim AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# ── build ───────────────────────────────────────────────────────────
FROM node:22-bookworm-slim AS build
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


# ── preview ─────────────────────────────────────────────────────────
# Serves the built site the way Cloudflare Pages does: directory URLs,
# a custom 404, immutable caching on hashed assets, and the headers from
# public/_headers (nginx cannot read that file, so nginx.conf mirrors it).
FROM nginx:1.29-alpine AS preview
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
