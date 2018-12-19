# Use a node image to build the project
FROM node:8 as builder

# Use a custom builder directory and copy the required files.
WORKDIR /builder
COPY src/ src/
COPY package.json .

# Install the required packages
RUN ["npm", "install"]

# Build the project
RUN ["npm", "run", "build"]

# Inherit from the nginx image
FROM nginx

# Move the files to the default website defined by the nginx image
COPY --from=builder /builder/dist /usr/share/nginx/html
