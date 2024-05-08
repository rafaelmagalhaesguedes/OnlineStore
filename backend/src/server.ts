import { App } from './app';

const PORT = process.env.APP_PORT || 3001;

class Server {
  private app: App;

  private port: string | number;

  constructor(port: string | number) {
    this.app = new App();
    this.port = port;
  }

  public start() {
    this.app.start(this.port);
  }
}

new Server(PORT).start();
