FROM node:12.9.0 as build

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:12.9.0

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --production

COPY --from=build /usr/app/dist ./dist

EXPOSE 3000

CMD [ "npm", "start" ]