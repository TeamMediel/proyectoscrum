const rolesCtrl ={}
rolesCtrl.getRoles = async (req, res) => {
    const roles = await Roles.find();
    res.json(roles); 
}


 rolesCtrl.createRoles= async (req, res) => {
    const roles = new User(req.body);
      
    await roles.save();
    res.json({
        'status': 'Rol Saved'
    });
};

rolesCtrl.getRol = async (req, res) => {
    //console.log(req.params.id);
    const rol = await Roles.findById(req.params.id);
    res.json(rol);
    //res.json('received');
}

rolesCtrl.editRoles = async (req, res) => {
    const { id } = req.params;
    const roles = {
        name: req.body.name,
        id_user: req.body.id_user,
        
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        status: 'Rol Updated'
    });
};

userCtrl.deleteRol = async (req, res) => {
    await Roles.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Rol Deleted'
    });
};
module.exports = rolesCtrl;
