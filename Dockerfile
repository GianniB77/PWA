FROM node:16-alpine as build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:stable-alpine3.17-slim as server
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
