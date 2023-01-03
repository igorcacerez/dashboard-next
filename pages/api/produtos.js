const db = require('../../src/models/index');

export default async function  handler(req, res) {
    const [results, metadata] = await db.query('SELECT * FROM produtos');
    res.status(200).json({ produtos: results })
}
