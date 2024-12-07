# Use the slim version of the node 14 image as our base
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

# # Create a directory for our application in the container 
# RUN mkdir -p /usr/src/app

# # Set this new directory as our working directory for subsequent instructions
# WORKDIR /usr/src/app

# # Copy all files in the current directory into the container
# COPY . .

# # Set the PYTHONPATH environment variable, which is occasionally necessary for certain node packages
# # 'PWD' is an environment variable that stores the path of the current working directory
# ENV PYTHONPATH=${PYTHONPATH}:${PWD}

# # Set the environment variable for the application's port
# ENV PORT 8080

# # Install 'serve', a static file serving package globally in the container
# RUN npm install -g serve

# # Install all the node modules required by the React app
# RUN npm install
# # Build the React app
# RUN npm run build

# # Serve the 'build' directory on port 8080 using 'serve'
# CMD ["serve", "-s", "-l", "8080", "./build"]