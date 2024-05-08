import express = require('express');
import { MainRoutes } from './routes';

class App {
  public app: express.Express;
  private mainRoutes = new MainRoutes();

  constructor() {
    this.app = express();
    this.mainRoutes = new MainRoutes();
    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use(this.mainRoutes.router);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => 
      console.log(`Server running on port: ${PORT}!`));
  }
}

export { App };

export const { app } = new App();
