# 準備

# stack

+ Backend: express
+ Fronend: -
+ DB: MySQL5.7.44
  + mysql
  + default-port: 3306
+ test
  + default-mysql-client

# ホストOS(MacOS)側

```sh
docker compose up
curl http://localhost:8000/get
```

# DB側

```sh
docker-compose exec test /bin/bash
# ${DB_PORT}=1111 host: docker-composeにdbとある
# init data
mysql -u ${DB_USER} -h ${DB_HOST} -D ${DB_NAME} -P ${DB_PORT} -p < script/init.sql
mysql -u ${DB_USER} -h ${DB_HOST} -D ${DB_NAME} -P ${DB_PORT} -p
# check
> select * from person;
# or `psql postgres://test:test@db:1111/mydb`
```