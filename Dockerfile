FROM node:10

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Expose API port to the outside
EXPOSE 3000

# Launch application
CMD ["npm","start"]
