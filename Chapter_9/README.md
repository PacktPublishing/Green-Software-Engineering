# Sitespeed.io Docker CLI

This project provides a CLI tool to run Sitespeed.io tests using Docker. It includes features for logging, control files to prevent multiple instances, and looping the tests.

## Disclaimer

This example is based on the Sitespeed.io examples from [dashboard.sitespeed.io](https://github.com/sitespeedio/dashboard.sitespeed.io). It is a working example of how you can use Sitespeed.io to monitor the performance of your website. The code runs on an instance on Digital Ocean and sends the metrics to [dashboard.sitespeed.io](https://dashboard.sitespeed.io) (set up using the [docker-compose file](https://github.com/sitespeedio/sitespeed.io/blob/main/docker/docker-compose.yml) and configured for production usage).

You should use this repository as an example of what you can set up yourself. The idea is to make it easy to set up, add new URLs to test, and add new user journeys. The script (`loop.sh`) runs on your server and executes indefinitely, pulling updates from git and running the tests.

For full documentation, check out the [Sitespeed.io documentation](https://www.sitespeed.io/documentation/sitespeed.io/continuously-run-your-tests/).

## Prerequisites

- Node.js (v14 or later)
- Docker
- Git

## Run Docker compose

```sh
cd docker
docker-compose up -d
cd ..


## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies.
4. Run 


```sh
git clone <repository_url>
cd sitespeed-cli
npm install
npm run start
