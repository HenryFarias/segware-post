FROM mhart/alpine-node:11 AS builder
MAINTAINER Henry Farias
WORKDIR /app
COPY ./post-web/. .
#COPY . .
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
