# sudo docker build -t fawazsullialabs/roam-eazy-ui:0.0.3 .


# Step 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn

# Copy the rest of the app code
COPY . .

# Build the Next.js app
RUN yarn run build

# Step 2: Run the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN yarn install --omit=dev

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "run", "start"]
