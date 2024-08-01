// use this: https://abrir.link/RJpqe
// this is my API: https://nodex-4t9z.onrender.com/
const express = require('express')

const app = express();
const port = 3000;

app.use(express.json())

const data = [
  {id: 1, nome: "John", email: 'john@gmail.com', senha: 'john@123'}
]

//rota de cadastro de usuario
app.post('/cadastro', (req:any, res:any) => {
    const newUser = req.body
    data.push(newUser)
    console.log(newUser)
    res.end('usuario cadastrado')
})

app.get('/', (req: any, res: any) => {
  res.json({
    data,
    message: 'database users'
  })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
