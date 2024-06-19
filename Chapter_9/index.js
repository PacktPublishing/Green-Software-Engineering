#!/usr/bin/env node

const { program } = require('commander');
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

program
  .version('1.0.0')
  .description('Sitespeed.io Docker CLI');

const DOCKER_CONTAINER = 'sitespeedio/sitespeed.io:latest';
const DOCKER_SETUP = `--cap-add=NET_ADMIN --network host --shm-size=4g --rm -v "$(pwd)./config":/config -v "$(pwd)":/sitespeed.io -v /etc/localtime:/etc/localtime:ro -e MAX_OLD_SPACE_SIZE=3072 --name sitespeedio`;
const DESKTOP_BROWSERS = ['chrome'];

program
  .command('run')
  .description('Run sitespeed.io tests')
  .action(() => {
    const testFiles = shell.ls('tests/pages/*.txt');

    testFiles.forEach((file) => {
      const filename = path.basename(file);
      const filenameWithoutExtension = path.parse(filename).name;
      const configFile = `config/${filenameWithoutExtension}.json`;

      if (fs.existsSync(configFile)) {
        console.log(`Using config file ${configFile}`);
      } else {
        console.log(`Missing config file ${configFile}`);
      }

      DESKTOP_BROWSERS.forEach((browser) => {
        const dockerCommand = `docker run ${DOCKER_SETUP} ${DOCKER_CONTAINER} --config ${configFile} -b ${browser} ${file}`;
        console.log(dockerCommand);
        shell.exec(dockerCommand);
      });
    });

    // Remove all volumes of data
    shell.exec('docker volume prune -f');
    shell.exec('sleep 20');
  });

program.parse(process.argv);
