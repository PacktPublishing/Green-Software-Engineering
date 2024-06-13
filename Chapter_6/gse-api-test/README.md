## License

MIT License

```
MIT License

© 2024 Packt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

# Measuring Web Application Sustainability

This example uses [sitespeed.io](https://www.sitespeed.io/), a sophisticated performance monitoring tool integral to refining our web development practices.

Sitespeed.io features several modules, each designed to evaluate different aspects of web applications. In this book, we concentrate on the sustainability module, which employs the Sustainable Web Design (SWD) model to assess the CO2 emissions of web applications.

For this example, we will analyze the New York Times website (nytimes.com).

## Prerequisites

1. **Python Environment:**
   Ensure a functioning Python environment is set up with version 3.9.16 or above. You can download it from the [official Python website](https://www.python.org/downloads/).

2. **Node.js Environment:**
   Ensure a functioning Node.js environment is set up with version 14.0.0 or above. You can download it from the [official Node.js website](https://nodejs.org/en/download).

3. **Containerization Software:**
   Installation of containerization software is required, such as Docker or Rancher, to manage and run containerized applications.
   - [Docker](https://www.docker.com/products/docker-desktop/)
   - [Rancher](https://www.rancher.com/)

## Usage

1. **Pull the Sitespeed.io Docker Image:**

   ```bash
   docker pull sitespeedio/sitespeed.io
   ```

2. **Run the Sustainability Analysis:**

   ```bash
   docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io:latest --sustainable.model=swd --sustainable.disableHosting=true --sustainable.enable --sustainable.pageViews=1000 https://www.nytimes.com/
   ```

3. **Access the Results:**

   The `-v "$(pwd):/sitespeed.io"` option mounts the current directory (`$(pwd)`) to the `/sitespeed.io` directory in the container. Sitespeed.io will write the output reports to this directory, making them accessible on your host machine.

   Results will be under the folder:

   ```
   sitespeed-result/www.nytimes.com/<current date>/
   ```

