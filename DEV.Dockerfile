FROM node:lts-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
WORKDIR /app
ENV REACT_APP_API_HOST https://cors-anywhere.herokuapp.com/https://server.matters.news/
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY ./ ./
EXPOSE 3000
CMD ["/bin/sh","-c","yarn start"]