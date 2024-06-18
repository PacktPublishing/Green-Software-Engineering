# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest

# Add a database initialization script to the Docker image
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432
