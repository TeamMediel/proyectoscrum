const Roles = require('../models/roles');
const rolesCtrl = {};
 
rolesCtrl.getRoles = async (req, res) => {
    const roles = await Roles.find();
    res.json(roles);       
};

rolesCtrl.createRol = async (req, res) => {
    const roles = new Roles({
        name: req.body.name
    });
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

rolesCtrl.editRol = async (req, res) => {
    const { id } = req.params;
    const rol = {
        name: req.body.name
    };
    await Roles.findByIdAndUpdate(id, {$set: rol}, {new: true});
    res.json({
        status: 'Rol Updated'
    });
};

rolesCtrl.deleteRol = async (req, res) => {
    await Roles.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Rol Deleted'
    });
};

module.exports = rolesCtrl;
