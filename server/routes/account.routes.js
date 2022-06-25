const express = require('express');
const router = express.Router();
const AccountsController = require("../controllers/accountsController");
const {getAccount, deleteAccount, getAllAccounts, createAccount, updateAccount} = AccountsController;

router.delete('/:id', getAccount, deleteAccount);
router.get('/', getAllAccounts);
router.get('/:id', getAccount);
router.post('/', createAccount);
router.patch('/:id',updateAccount);





module.exports = router;
