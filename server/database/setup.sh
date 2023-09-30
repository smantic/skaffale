#!/bin/bash
SKAFFALE_DATABASE_CONTAINER_NAME="skaffaledatabase-container"

# Set up link to .env
if [ ! -f "../.env" ]
then
    echo "Error .env does not exist"
    exit 1
fi

# Check if container is up
if docker container inspect "${SKAFFALE_DATABASE_CONTAINER_NAME}" > /dev/null 2>&1
then
    echo "Doker container ${SKAFFALE_DATABASE_CONTAINER_NAME} is running"
    if node ./tools/testDatabaseConnection.js
    then
        echo "We are able to connect to the database."
    else
        echo "Error! We are able to connect to the database. testDatabaseConnection.js returned $?"
    fi

    for script in ./setup/*
    do
        echo "Executing ${script}"
        node ${script}
    done
else
    echo "Make sure to run npm run run-container to start the database."
    exit 1
fi