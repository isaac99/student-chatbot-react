FROM node:18-alpine3.17

WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy application files
COPY . .

# Set environment variables (or pass them at runtime)
ENV NODE_ENV=production

# Expose port
EXPOSE 3010

# Set entry point
ENTRYPOINT ["./docker-entrypoint.sh"]

# Start the app
CMD ["node", "server.js"]