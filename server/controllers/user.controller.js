const User = require('../models/user');
const userCtrl = {};
 
userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);       
};

userCtrl.createUser = async (req, res) => {
    const user = new User({
        roles: req.body.roles,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    await user.save();
    res.json({
        'status': 'User Saved'
    });
};

userCtrl.getUser = async (req, res) => {
    //console.log(req.params.id);
    const user = await User.findById(req.params.id);
    res.json(user);
    //res.json('received');
}

userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        roles: req.body.roles,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        status: 'User Updated'
    });
};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User Deleted'
    });
};

module.exports = userCtrl;
