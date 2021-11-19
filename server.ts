import express, { Request, Response, NextFunction } from 'express';
import { json, urlencoded } from 'body-parser';
import path from 'path';

import paymentRoute from './routes/payment';

const app = express();
const port = process.env.PORT || 5000;
const prod = process.env.NODE_ENV === 'production';

app.use(json());
app.use(urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static(path.join(__dirname, `${prod ? '../' : ''}client/build`))
  );

  app.get('*', function (_, res) {
    res.sendFile(
      path.join(__dirname, `${prod ? '../' : ''}client/build/index.html`)
    );
  });
}

app.use('/payment', paymentRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log('🚀 Server running on port', port);
});
