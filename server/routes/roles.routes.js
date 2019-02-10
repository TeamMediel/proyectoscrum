const express = require('express');
const router = express.Router();

const roles = require('../controllers/roles.controller');

router.get('/', roles.getRoles);
router.post('/', roles.createRoles);
router.get('/:id', roles.getRol);
router.put('/:id', roles.editRoles);
router.delete('/:id', roles.deleteRoles);

module.exports = router;