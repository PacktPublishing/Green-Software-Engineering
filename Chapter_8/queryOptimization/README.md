## License

MIT License

```
MIT License

© 2024 Packt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

# Query Optimization


## Prerequisites


1. **Containerization Software:**
   Installation of containerization software is required, such as Docker or Rancher, to manage and run containerized applications.
   - [Docker](https://www.docker.com/products/docker-desktop/)
   - [Rancher](https://www.rancher.com/)

## Files

- `Dockerfile`: Sets up the PostgreSQL environment.
- `init.sql`: Initialization script to create the `sales` table and insert sample data.
- `run_query.sh`: Bash script to run the queries and compare performance.


## Usage

This example demonstrates how to compare the performance of a PostgreSQL query with and without an index, and with additional memory settings. We will use Docker to set up the PostgreSQL environment and run the necessary SQL commands.

   ```bash
   docker build -t postgres-sales .
   chmod +x run_query.sh
   ./run_query.sh

