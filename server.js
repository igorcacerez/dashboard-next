const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const db = require('./src/models/index');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

var bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8888 || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json()); app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*'
}));

// Rota para teste
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Rota para inserir uma venda
app.get('/vendas/inserir', async (req, res) => {
  const { valor, data, categoria, id } = req.query;

  // Insere no banco
  const insert = await db.query(
    `INSERT INTO vendas (valor, data, categoria, id) VALUES (${valor}, '${data}', '${categoria}', ${id})`	
  );

  // Busca os dados para o gráfico
  const [results, metadata] = await db.query(
      `SELECT
          DATE_FORMAT(vendas.data, '%m/%Y') AS mes,
          SUM(vendas.valor) AS valor
      FROM vendas
      GROUP BY mes
      ORDER BY mes`
  );

  io.emit('grafico_linha', results);
  res.status(200).json({ data: results });
});

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
