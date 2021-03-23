FROM node:14

# Create app directory
WORKDIR /usr/src/app
RUN yarn install
COPY . .
EXPOSE 8080
CMD yarn start
