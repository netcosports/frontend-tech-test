##########################################################################

FROM node:lts-alpine AS deps
ARG NPM_TOKEN
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
COPY package.json yarn.lock .yarnrc ./
RUN yarn install --frozen-lockfile

##########################################################################

FROM node:lts-alpine AS builder
ARG APP_ENV
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules /app/node_modules
RUN yarn build:$APP_ENV
RUN rm -rf .yarnrc && rm -rf .npmrc

##########################################################################
# Production image, copy all the files and run next
FROM node:lts-alpine AS runner
WORKDIR /app
RUN apk add curl

ARG APP_ENV=develop
ARG NODE_ENV=develop
ARG PORT=3000

ENV APP_ENV=$APP_ENV \
    NODE_ENV=$NODE_ENV \
    PORT=$PORT

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN mkdir -p /app/.next/cache/images && chown nextjs:nodejs /app/.next/cache/images
VOLUME /app/.next/cache/images

COPY --from=builder /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE $PORT
CMD ["yarn", "start:develop"]

##########################################################################