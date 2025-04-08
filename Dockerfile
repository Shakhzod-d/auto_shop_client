# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Use npm install instead of npm ci for more flexibility
# Adding --legacy-peer-deps flag to handle dependency conflicts
RUN npm install --legacy-peer-deps

# Copy all files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set environment variables at runtime using .env file
ENV NODE_ENV production

# Run the Next.js application
CMD ["npm", "start"]