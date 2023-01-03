const service = require('../services/users.service');

exports.getAllUsers = async (req, res) => {
    const users = await service.getAllUsers();
    res.status(200).json({data: users});
}

exports.getUserById = async (req, res) => {
    const { id } = req.query;
    const user = await service.getUserById(id);

    if (!user) {
        res.status(404).json({message: 'User not found'});
        return null;
    }

    res.status(200).json({data: user});
}

exports.createUser = async (req, res) => {
    const user = await service.createUser(req.body);
    res.status(201).json({data: user});
}

exports.updateUser = async (req, res) => {
    const { id } = req.query;
    const user = await service.updateUser(id, req.body);

    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json({data: user});
}

exports.deleteUser = async (req, res) => {
    const { id } = req.query;
    const user = await service.deleteUser(id);

    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }

    res.status(204).json();
}

