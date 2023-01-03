const userController = require('../../../src/controllers/users.controller');

export default async function handler(req, res) {
    const users = await userController.getUserById(req, res);
}