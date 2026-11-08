FROM bellsoft/liberica-openjdk-debian:17 AS builder

WORKDIR /workspace

COPY eframe-web/target/eframe-web.jar eframe-web.jar

RUN mkdir -p /opt/eframe && \
    mv eframe-web.jar /opt/eframe/eframe-web.jar && \
    mkdir -p /opt/eframe/logs && \
    mkdir -p /opt/eframe/data

FROM bellsoft/liberica-openjdk-debian:17

WORKDIR /opt/eframe

COPY --from=builder /opt/eframe/ .

COPY scripts/docker/application-docker.yml /opt/eframe/application.yml

EXPOSE 8081

ENV JAVA_OPTS="-Xms256m -Xmx512m"

CMD ["java", "-jar", "--spring.config.location=/opt/eframe/application.yml", "eframe-web.jar"]