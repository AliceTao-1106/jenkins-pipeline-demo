const User = require('../models/User');

exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};


