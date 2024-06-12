MIT License

Copyright (c) 2024 Packt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### README.md

# Fibonacci Algorithm Energy Efficiency

This project explores the energy consumption and execution time of two implementations of the Fibonacci sequence: recursive and iterative. The CodeCarbon library is utilized to measure the environmental impact and performance of each method.

By selecting a method, the code will run the chosen Fibonacci algorithm, measuring both the energy usage and the execution time. This allows for a comparison of the efficiency and environmental impact of the two approaches.

## Prerequisites

- Ensure you have Python 3.9.16 or above installed. You can download it from the [official Python website](https://www.python.org/downloads/).
- Make sure you have `pip` installed. It typically comes with Python, but you can check by running:

  ```bash
  pip --version

## Usage

  ```bash
  pip install -r requirements.txt
  python fibonacci_test.py iterative
  python fibonacci_test.py recursive
