# 準備

# stack

+ Backend: express
+ Fronend: -
+ DB: PostgreSQL15.5
  + pg-promise
+ test
  + postgresql-client-15

# ホストOS(MacOS)側

```sh
docker compose up
curl http://localhost:8000/get
```

# DB側

```sh
docker-compose exec test /bin/bash
# ${DB_PORT}=1111 host: docker-composeにdbとある
psql -d ${DB_NAME} -U ${DB_USER} -h ${DB_HOST} -p ${DB_PORT}
# or `psql postgres://test:test@db:1111/mydb`
# init data
psql -d ${DB_NAME} -U ${DB_USER} -h ${DB_HOST} -p ${DB_PORT} -f /script/init.sql
```