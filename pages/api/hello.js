const db = require('../../src/models/index');
const User = require('../../src/models/User');

export default async function  handler(req, res) {
  const resultado = await db.sync();
  console.log(resultado);
  res.status(200).json({ name: 'John Doe' })
}
