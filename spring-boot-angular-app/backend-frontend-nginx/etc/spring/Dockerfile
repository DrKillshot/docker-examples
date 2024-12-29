FROM maven:3.8.2-openjdk-17 AS spring-builder
WORKDIR /app
COPY backend/pom.xml ./
COPY backend/src ./src
RUN mvn clean install

FROM openjdk:17-jdk-slim
WORKDIR /app

COPY --from=spring-builder /app/target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]