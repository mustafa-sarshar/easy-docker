# Instructions

## In the root directory of the app

### Build the docker image

- $ docker build -t [docker-image-tag] [address]
  - $ docker build -t react-simple-app .

### See all images

- $ docker images # or docker image ls

### Run docker container

- $ docker run [docker-image-tag]
  - $ docker run hello-docker

### Run docker container in background

- $ docker run -d --name [container-name] [image-tag]
  - $ docker run -d --name react-app react-simple-app

### Run docker container on a specific port

- $ docker run -d -p [desired-port]:[exposed-port] --name [container-name] [image-tag]
  - $ docker run -d -p 1234:3000 --name react-app react-simple-app

### Publish (push) docker image to docker-hub

### Get (pull) docker image from docker-hub

- $ docker pull [docker-image-name]

### To delete a docker image

- $ docker image rm [image-id]

### To terminate (kill) a running container

- $ docker kill [container-id]
- $ docker rm [container-name] -f

### Run command in the running container

- $ docker exec -it [container-name] [command]
  - $ docker exec -it react-app bash
