const ClientController = require('../controllers/clientsController');
const express = require('express');
const router = express.Router();



router.get('/',  ClientController.getAllClients);
router.get('/:id', ClientController.getClient);
router.post('/', ClientController.createClient);
router.delete('/:id', ClientController.deleteClient);
router.patch('/:id', ClientController.updateClient)


module.exports = router;

