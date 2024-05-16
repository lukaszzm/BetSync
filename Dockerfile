# Docker image for API service

FROM node:20 AS base

RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

RUN npm install turbo --global

FROM base AS builder

WORKDIR /app

COPY . . 

RUN turbo prune --scope=api --docker

FROM base AS installer

WORKDIR /app

COPY --from=builder /app/out/package-lock.json ./package-lock.json

COPY --from=builder /app/out/json/ .

COPY --from=builder /app/apps/api/prisma ./prisma

RUN npm install

RUN npx prisma generate

COPY --from=builder /app/out/full/ .

COPY turbo.json turbo.json

RUN turbo build --filter=api --no-cache

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nest-app

RUN adduser --system --uid 1001 nest-app

USER nest-app

COPY --from=installer /app .

CMD node apps/api/dist/main.js