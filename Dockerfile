FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install -g json-server
RUN yarn install
COPY . /app
RUN yarn build
CMD [ "yarn", "start" ]