# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Set environment variables for Strapi
ENV NODE_ENV=production

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build pllugins
RUN cd src/plugins/pdf-preview
RUN npm ci
RUN npm run build

WORKDIR /app

RUN npm run build

# Expose the port the app will run on
EXPOSE 1337

# Run the Strapi application
CMD ["npm", "run", "start"]
