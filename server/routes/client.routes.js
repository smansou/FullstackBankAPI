const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/clientsController");
const { getAllClients, getClient, createClient, deleteClient, updateClient } = ClientController;

router.get("/", getAllClients);
router.get("/:id", getClient);
router.post("/", createClient);
router.delete("/:id", deleteClient);
router.patch("/:id", updateClient);

module.exports = router;
