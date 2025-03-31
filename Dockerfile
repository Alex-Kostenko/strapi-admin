# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./
ENV NODE_ENV=production

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Set environment variables for Strapi
ENV NODE_ENV=production

RUN npm run build

# Expose the port the app will run on
EXPOSE 1337

# Run the Strapi application
#CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
