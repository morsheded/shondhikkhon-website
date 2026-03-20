# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Serve stage (static export via nginx) ----
FROM nginx:1.27-alpine AS runner

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy built static export
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
