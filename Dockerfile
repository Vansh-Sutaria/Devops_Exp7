# Use official node runtime
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production || npm install

# Copy source
COPY . .

# Port
EXPOSE 3000

# Start app
CMD ["node", "src/server.js"]
