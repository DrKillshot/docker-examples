FROM node:20-alpine as angular-builder
WORKDIR /app
COPY angular-app/*.json ./
RUN npm install
COPY angular-app/src ./src
RUN npm run build

FROM maven:3.8.2-openjdk-17 AS spring-builder
WORKDIR /app
COPY backend/pom.xml ./
COPY backend/src ./src

COPY --from=angular-builder /app/dist/angular-app/browser ./src/main/resources/static/

RUN mvn clean install

FROM openjdk:17-jdk-slim
WORKDIR /app

COPY --from=spring-builder /app/target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]