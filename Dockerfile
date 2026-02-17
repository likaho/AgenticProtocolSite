# Production-ready multi-stage Dockerfile for Next.js (uses pnpm via corepack)
# Build: docker build -t <registry>/agenticprotocol:tag .
# Run:  docker run -p 3000:3000 <registry>/agenticprotocol:tag

FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm (via corepack) and dependencies, then build
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate \
  && pnpm install --frozen-lockfile

# Copy source and build app
COPY . .
RUN pnpm build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Ensure pnpm is available for the runtime start script
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only runtime artifacts from the builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["pnpm", "start"]