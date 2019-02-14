const User = require('../models/user');
const Roles = require('../models/roles');
const authCtrl = {};
 

authCtrl.login = async (req, res) => {
        
    let user = await User.findOne({email: req.body.email});
    if(user){
        if(user.password == req.body.password){
            res.json(user);
        } else {
            res.json(401, {
                'status': 'Login failed, User or Password Wrong'
            });
        }
    } else {
        res.json(401, {
            'status': 'Login failed, User not registered'
        });
    }
    
};

authCtrl.register = async (req, res) => {
    let user = await User.find({username: req.body.username});
    
    if(user.length == 0){
        let rolList = await Roles.find({name: 'usuario'});
        user = new User({
            roles: rolList,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        user.save().then(() => {
            res.json(user)
        });
    } else {
        res.json(302, {
            'status': 'User already exists'
        });
    }
        
};

module.exports = authCtrl;
