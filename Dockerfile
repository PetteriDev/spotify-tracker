# Use the official Node.js image as the base image
FROM node:18.16.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Start the backend app using the "start" script defined in package.json
CMD ["npm", "run", "start"]