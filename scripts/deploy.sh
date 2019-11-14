echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t launc --build-arg API_ROUTE=$2 .
docker images
docker tag launc:latest $DOCKER_USERNAME/launc-frontend:$1
docker push $DOCKER_USERNAME/launc-frontend

