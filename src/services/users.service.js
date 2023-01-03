const db = require('../models/index');
const User = require('../models/User');

exports.getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

exports.getUserById = async (id) => {
    const [results, metadata] = await db.query(
        'SELECT * FROM users WHERE id = :id',
        {
            replacements: { id },
            type: db.QueryTypes.SELECT,
        }
    ); 

    return results[0] || null;
};

exports.createUser = async (user) => {
    const newUser = await User.create(user);
    return newUser;
};

exports.updateUser = async (id, user) => {
    const [affectedRows] = await User.update(user, {
        where: { id },
    });

    return affectedRows;
}

exports.deleteUser = async (id) => {
    const affectedRows = await User.destroy({
        where: { id },
    });

    return affectedRows;
}
