FROM node:buster
USER node
WORKDIR /home/node/app

COPY ./package.json ./
RUN yarn
COPY ./ ./

CMD [ "yarn", "start:dev" ]
