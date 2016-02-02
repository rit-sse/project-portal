#!/bin/bash
CONN=postgres://$DB_ENV_POSTGRES_USER:$DB_ENV_POSTGRES_PASS@$DB_PORT_5432_TCP_ADDR:$DB_PORT_5432_TCP_PORT/$DB_ENV_POSTGRES_DB
echo $CONN
./postgrest $CONN \
          --port 3000 \
          --schema public \
          --anonymous postgres \
          --pool 200
