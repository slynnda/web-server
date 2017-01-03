docker build -t $WEB_SERVER_IMAGE_ID docker && \
docker login --username="$DOCKER_USERNAME" --password="$DOCKER_PASSWORD" && \
docker push $WEB_SERVER_IMAGE_ID
