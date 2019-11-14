echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t launc --build-arg API_ROUTE=$2 .
docker images

if [ $1 == "release" ]; then
    docker tag launc:latest $DOCKER_USERNAME/launc-frontend:$1
else
    docker tag launc:latest $DOCKER_USERNAME/launc-frontend:latest
    docker tag launc:latest $DOCKER_USERNAME/launc-frontend:$1
fi

docker push $DOCKER_USERNAME/launc-frontend

