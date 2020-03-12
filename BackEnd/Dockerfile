FROM maslick/minimalka:jdk11
WORKDIR /app
COPY ./icons /app/icons/
COPY ./images /app/images/
COPY ./target/friendbook-0.0.1-SNAPSHOT.jar ./friendbook-0.0.1-SNAPSHOT.jar
CMD java $JAVA_OPTIONS -jar friendbook-0.0.1-SNAPSHOT.jar
