# build stage
FROM golang:alpine AS build-stage

ENV APP_DIR /go/src/github.com/orange-lightsaber/julian.run

RUN mkdir -p $APP_DIR
ADD . $APP_DIR
RUN apk add --no-cache build-base
RUN GOPATH=/go \
    && cd $APP_DIR \
    && make deps \
    && make build \
    && mv $APP_DIR/dist/julian.run /

# bin stage
FROM alpine
WORKDIR /app
COPY --from=build-stage /julian.run /app/
ENTRYPOINT ./julian.run