```
sudo docker info
sudo docker run -i -t ubuntu /bin/bash
sudo docker run --name test_docker -i -t ubuntu /bin/bash
```
```
sudo docker start test_docker
sudo docker start 11sd14ed //test_docker的ID
sudo docker stop test_docker
sudo docker stop 11sd14ed //test_docker的ID
sudo docker rm test_docker
sudo docker rm 11sd14ed //test_docker的ID
sudo docker rm `docker ps -a -q`
```
```
sudo docker ps
sudo docker ps -a
sudo docker ps -l
sudo docker attach test_docker
sudo docker attach 11sd14ed //test_docker的ID
sudo docker run --name daemon_dave -d ubuntu /bin/bash -c "while true; do echo hello world; sleep 1; done"
sudo docker logs daemon_dave
sudo docker logs -f daemon_dave
sudo docker logs -ft daemon_dave
sudo docker top daemon_dave
sudo docker exec -d daemon_dave touch /etc/new_config_file
sudo docker exec -t -i daemon_dave touch /bin/bash
sudo docker run --restart=always --name daemon_dave -d ubuntu bin/sh -c "while true; do echo hello world; sleep 1; done"
sudo docker inspect daemon_dave
sudo docker inspect --format='{{ .State.Running }}' daemon_dave
```
```
sudo docker images
sudo docker pull ubuntu
sudo docker search ubuntu
```
```
# Version: 0.0.1
FROM ubuntu:14.04
MAINTAINER YUAN "yuan@gmail.com"
RUN apt-get update
RUN apt-get install -y nginx
RUN echo 'Hi, I am in your container'> /usr/share/nginx/html/index.html
ENTRYPOINT ["/usr/sbin/nginx"]
EXPOSE 80
```
