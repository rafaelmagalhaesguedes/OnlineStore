import * as express from 'express';
import * as cors from 'cors';
import router from './routes';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', (_req, res) => {
  res.send('Health check ok');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});