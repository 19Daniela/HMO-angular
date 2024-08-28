import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provide } from '@angular/platform-browser';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    // provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
