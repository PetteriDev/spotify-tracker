# Use the official Node.js image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your backend app will run on
EXPOSE 3000

# Start the backend app using the "start-express" script defined in package.json
CMD ["npm", "run", "start-express"]