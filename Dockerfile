# Docker image for API service

FROM node:18-alpine AS alpine

RUN apk update

RUN apk add --no-cache libc6-compat

FROM alpine AS base

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