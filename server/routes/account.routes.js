const express = require('express');
const router = express.Router();
const AccountsController = require("../controllers/accountsController");



router.delete('/:id', AccountsController.getAccount, AccountsController.deleteAccount);

router.get('/', AccountsController.getAllAccounts);

router.get('/:id', AccountsController.getAccount);

router.post('/', AccountsController.createAccount);

router.patch('/:id', AccountsController.updateAccount);





module.exports = router;
