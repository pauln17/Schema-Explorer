# 1. Use Node image
FROM node:22

# 2. Set working directory
WORKDIR /app

# 3. Copy package files & install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the code
COPY . .

# 5. Expose port
EXPOSE 3000

# 6. Start app
CMD ["npm", "run", "dev"]
