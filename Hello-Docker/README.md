# Instructions

## In the root directory of the app
### Build the docker image
  - $ docker build -t [docker-image-tag] [address]
    - $ docker build -t hello-docker .
### See all images
  - $ docker images   # or docker image ls
### Run docker image
  - $ docker run [docker-image-tag]
    - $ docker run hello-docker
### Publish (push) docker image to docker-hub

### Get (pull) docker image from docker-hub
  - $ docker pull [docker-image-name]
    - $ docker pull ...