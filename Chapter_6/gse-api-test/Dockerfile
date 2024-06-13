# Use the official Node.js base image with Alpine

FROM node:22-alpine3.18

# Set the working directory

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files

COPY ./testServer/package*.json ./

RUN npm install

# Install dependencies

RUN apk add --no-cache bash curl jq

RUN rm -rf /var/cache/apk/*

# Copy the application code into the Docker image

COPY ./testServer/generateData.js .

COPY ./testServer/server.js .

COPY ./testServer/images/defaultImage.jpeg images/

# Create a directory to store images

RUN mkdir -p /app/images

# Run generateData.js to create initial data files

RUN node /app/generateData.js

# Expose the port your app runs on

EXPOSE 3000

# Define the command to run your app

CMD ["node", "server.js"]