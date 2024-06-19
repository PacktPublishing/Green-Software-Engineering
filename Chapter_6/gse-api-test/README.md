## License

MIT License

```
MIT License

© 2024 Packt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

# Measuring API calls

This example uses [The Green Metrics Tool (GMT)](https://github.com/green-coding-solutions/green-metrics-tool), an open-source software solution designed to measure the energy consumption and CO2 emissions of software applications.

## Prerequisites

1. **Python Environment:**
   Ensure a functioning Python environment is set up with version 3.9.16 or above. You can download it from the [official Python website](https://www.python.org/downloads/).

2. **Node.js Environment:**
   Ensure a functioning Node.js environment is set up with version 14.0.0 or above. You can download it from the [official Node.js website](https://nodejs.org/en/download).

3. **Containerization Software:**
   Installation of containerization software is required, such as Docker or Rancher, to manage and run containerized applications.
   - [Docker](https://www.docker.com/products/docker-desktop/)
   - [Rancher](https://www.rancher.com/)

4. **Green Mterics Tool** 
   For this examples, we tested with version 0.24 of the tool. It is important to note that the installation should not be done within the gse-api-test directory.
   - [GMT](https://docs.green-coding.io/docs/prologue/introduction/)

## Installation

1. Install GGTM:

   - Installation on Linux → https://docs.green-coding.io/docs/installation/installation-linux/
   - Installation on macOS → https://docs.green-coding.io/docs/installation/installation-macos/
   - Installation on Windows (WSL) → https://docs.green-coding.io/docs/installation/installation-windows/

## Usage

1. **Build and Run the GMT Server:**

   ```bash
   cd <gtm-install-folder>/docker
   docker-compose up --build
   ```

2. **Execute the Test:**

   ```bash
   cd <gtm-install-folder>
   source venv/bin/activate
   python3 runner.py --uri <full path to gsi-api-test directory> --name gsi-api-test --docker-prune --allow-unsafe
   ```
3. **Review Results:**

   Upon successful execution, a message will be displayed in the terminal directing you to a URL where the report can be accessed. This URL is set during the GTM installation process.
   
   ````{verbatim}
   ##########################################################
   Please access your report on the URL http://metrics.green-coding.internal:9142/stats.html?id=<run id number>
   ````
