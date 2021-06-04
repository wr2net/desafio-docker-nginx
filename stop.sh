#!./bin/sh

docker-compose down
docker rm app_wr2net
docker rm db_wr2net
docker rm nginx_wr2net
docker network rm wr2_network