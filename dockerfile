# ---- Build Stage ----
FROM node:18-buster AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json or yarn.lock for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the contents of the project to the container 
COPY . ./

# Build application
RUN npm run build

# ---- Run Stage ----
FROM nginx:alpine

# Copy build artifacts from build stage to default nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80
