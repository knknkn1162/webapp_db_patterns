# 準備


# ホストOS(MacOS)側

```sh
curl http://localhost:8080
```


# DB側

```sh
docker-compose exec peek /bin/bash
apt update
apt install -y postgresql-client-15
# ${DB_PORT}=1111 host: docker-composeにdbとある
psql -d ${DB_NAME} -U ${DB_USER} -h ${DB_HOST} -p ${DB_HOST}
psql postgres://test:test@db:1111/mydb
```