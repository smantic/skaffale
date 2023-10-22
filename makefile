include .env

build:
	docker compose up --build -d --remove-orphans

initialize-database:
	docker exec -d skaffaleapi-container node /skaffaleapi/database/setup/setup.js

dump-database:
	@docker exec -i skaffaledatabase-container \
		/bin/bash -c "PGPASSWORD=${POSTGRES_PASSWORD} pg_dump --username ${POSTGRES_USER} ${POSTGRES_DATABASE}" > ./$$(date -Idate)_${POSTGRES_DATABASE}_dump.sql

restore-dump:
	@read -p "Enter Dump File Path:" dumpFilePath
	@docker exec -i skaffaledatabase-container \
		/bin/bash -c "PGPASSWORD=${POSTGRES_PASSWORD} psql --username ${POSTGRES_USER} ${POSTGRES_DATABASE}" < $$dumpFilePath

clean:
	docker-compose down