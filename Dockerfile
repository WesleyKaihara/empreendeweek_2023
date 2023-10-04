FROM mysql:8.0.16

ENV MYSQL_ROOT_PASSWORD EmpreendeWeek

COPY ./db.sql /docker-entrypoint-initdb.d/db.sql
