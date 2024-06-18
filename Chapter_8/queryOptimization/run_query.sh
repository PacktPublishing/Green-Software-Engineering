#!/bin/bash

# Variables
IMAGE_NAME=postgres-sales
CONTAINER_NAME=postgres-sales-container
DB_USER=postgres
DB_NAME=postgres
DB_PASSWORD=mysecretpassword
EXPLAIN_QUERY="EXPLAIN ANALYZE SELECT SUM(amount) FROM sales WHERE product_id = 50;"
CREATE_INDEX_QUERY="CREATE INDEX idx_product_id ON sales(product_id);"
SETTINGS_QUERY="SET work_mem = '64MB'; SET maintenance_work_mem = '128MB'; SET enable_seqscan TO OFF;"

# Function to check if the container is running
is_container_running() {
    docker ps -q -f name=$CONTAINER_NAME
}

# Function to check if the container exists
does_container_exist() {
    docker ps -aq -f name=$CONTAINER_NAME
}

# Function to start the container if it is not running
start_container() {
    if [ -n "$(does_container_exist)" ]; then
        echo "Starting existing container..."
        docker start $CONTAINER_NAME
    else
        echo "Creating and starting new container..."
        docker run --name $CONTAINER_NAME -e POSTGRES_PASSWORD=$DB_PASSWORD -d $IMAGE_NAME
        # Wait for PostgreSQL to initialize
        sleep 10
    fi
}

# Check if the container is running
if [ -z "$(is_container_running)" ]; then
    start_container
else
    echo "Container is already running."
fi

# Execute the EXPLAIN query before creating the index
echo "Running EXPLAIN ANALYZE before creating the index:"
docker exec -it $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME -c "$EXPLAIN_QUERY"

# Create the index
echo "Creating index on product_id column:"
docker exec -it $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME -c "$CREATE_INDEX_QUERY"

# Execute the EXPLAIN query after creating the index
echo "Running EXPLAIN ANALYZE after creating the index:"
docker exec -it $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME -c "$EXPLAIN_QUERY"

# Increase work memory, maintenance work memory, disable sequential scan, and execute the EXPLAIN query
echo "Setting work memory and disabling sequential scan, then running EXPLAIN ANALYZE:"
docker exec -it $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME -c "$SETTINGS_QUERY $EXPLAIN_QUERY"

# Stop and remove the container and its volumes
echo "Stopping and removing the container and its volumes..."
docker stop $CONTAINER_NAME
docker rm -v $CONTAINER_NAME

echo "Script execution completed."
