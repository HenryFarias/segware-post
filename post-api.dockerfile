FROM maven:3.3-jdk-8 as builder
MAINTAINER Henry Farias
RUN mkdir -p /opt/app
ENV PROJECT_HOME /opt/app
COPY ./post-api/. $PROJECT_HOME
WORKDIR  $PROJECT_HOME
RUN mvn clean install -DskipTests
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod","target/post-0.0.1-SNAPSHOT.jar"]