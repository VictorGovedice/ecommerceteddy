// use this: https://www.tabnews.com.br/tiagoCali/back-end-com-typescript-para-iniciantes

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
