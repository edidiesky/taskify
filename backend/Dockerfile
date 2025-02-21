# Building the base for taskify
FROM node:18-alpine AS base
WORKDIR /app
COPY src ./app
COPY package*.json composer*.json

RUN npm install

# Ccarrying out the 2nd build to resduce the image size
FROM node:18-alpine AS production
WORKDIR /app
COPY src ./app
COPY package*.json composer*.json
COPY --from=base /app/src ./

RUN npm install --only=production

CMD [ "php", "artisan", "serve" ]




