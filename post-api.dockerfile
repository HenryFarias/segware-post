FROM openjdk:8-alpine
MAINTAINER Henry Farias
RUN apk update && apk add bash
RUN mkdir -p /opt/app
ENV PROJECT_HOME /opt/app
COPY ./post-api/target/post-0.0.1-SNAPSHOT.jar $PROJECT_HOME
WORKDIR  $PROJECT_HOME
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod","post-0.0.1-SNAPSHOT.jar"]