FROM node:14-alpine AS builder

# Create app directory
WORKDIR /app

RUN npm i -g webpack webpack-cli

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist


EXPOSE 4000
CMD [ "npm", "run", "build:start" ]