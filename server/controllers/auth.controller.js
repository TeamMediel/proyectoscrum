const User = require('../models/user');
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
    let user = await User.find({email: req.body.email});
    
    if(user.length == 0){
        //let rolList = await Roles.find({name: 'usuario'});
        user = new User({
            roles: req.body.roles,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
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
