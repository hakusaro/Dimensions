import RoutingServer from './routingserver';

export interface ConfigServer {
  listenPort: number;
  routingServers: RoutingServer[];
}

export interface ConfigOptions {
  fakeVersion: boolean;
  fakeVersionNum: number;
  blockInvis: boolean;
}

export interface Config {
  servers: ConfigServer[];
  options: ConfigOptions;
}


export const ConfigSettings: Config = require(`../config.js`).ConfigSettings;