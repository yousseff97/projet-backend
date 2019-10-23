import {ProjetBackendApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ProjetBackendApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new ProjetBackendApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
