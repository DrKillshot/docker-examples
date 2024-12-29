FROM node:20-alpine as angular-builder
WORKDIR /app
COPY angular-app/*.json ./
RUN npm install
COPY ../../angular-app/src ./src
RUN npm run build

FROM nginx:latest
COPY angular-app/nginx.conf /etc/nginx/nginx.conf

COPY --from=angular-builder /app/dist/angular-app/browser /usr/share/nginx/html

EXPOSE 5555