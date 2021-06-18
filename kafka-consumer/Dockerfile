FROM node:buster

WORKDIR /app

COPY ./package.json ./
RUN yarn
COPY ./ ./

CMD [ "yarn", "start:dev" ]
