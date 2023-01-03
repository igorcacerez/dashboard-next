const db = require('../../../src/models/index');
const socketIo = require('socket.io-client');

export default async function handler(req, res) {
    const { valor, data, categoria, id } = req.query;
    const socket = io('http://localhost:8888', { transports : ['websocket'] });

    try {
        const insert = await db.query(
            `INSERT INTO vendas (valor, data, categoria, id) VALUES (${valor}, '${data}', '${categoria}', ${id})`	
        );

        const [results, metadata] = await db.query(
            `SELECT
                DATE_FORMAT(vendas.data, '%m/%Y') AS mes,
                SUM(vendas.valor) AS valor
            FROM vendas
            GROUP BY mes
            ORDER BY mes`
        );

        socket.emit('grafico_linha_insert', results);
        res.status(200).json({ data: results });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}