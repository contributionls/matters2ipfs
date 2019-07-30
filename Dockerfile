# Stage 1
FROM node:lts-alpine as react-build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --network-timeout 60000 --network-concurrency 2
COPY ./ ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
RUN rm -rf /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]