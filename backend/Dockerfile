# 1. Use Node image
FROM node:22

# 2. Set working directory
WORKDIR /app

# 3. Copy package files & install dependencies
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install

# 4. Copy prisma and generate
COPY prisma ./prisma
RUN npx prisma generate

# 4. Copy the rest of the code
COPY . .

# 5. Expose port
EXPOSE 4000

# 6. Start app
CMD ["npm", "run", "dev"]