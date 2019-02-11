const express = require('express');
const router = express.Router();

const roles = require('../controllers/roles.controller');

router.get('/', roles.getRoles);
router.post('/', roles.createRol);
router.get('/:id', roles.getRol);
router.put('/:id', roles.editRol);
router.delete('/:id', roles.deleteRol);

module.exports = router;