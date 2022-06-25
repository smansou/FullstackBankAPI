const express = require("express");
const mongoose = require("mongoose");
const Client = require("../models/client");
const bcrypt = require("bcrypt");

const ClientsController = {

getClient : async (req, res, next) => {
  let client;
  try {
    client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(400).send({ message: "Client not found" });
    } else { res.status(200).send(client); }
  } catch (err) {
    return res.status(500).send({ message: err.message });}
  //set client as prop on res obj to be available in other functions
  res.client = client;
  next();
},

getAllClients : async (req, res, next) => {
  try {
    const clients = await Client.find();
    res.status(200).send(clients);
  } catch (err) {}
  next();
},

createClient : async (req, res, next) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const client = new Client({
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  try {
    await client.save();
    res.status(201).send("Client Created! ===>  " + client);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
},

deleteClient : async (req, res, next) => {
  try {
    await res.client.remove();
    res.send({ message: "Client deleted successfully" });
  } catch (err) {
    res.send(err.message);
  }
},

updateClient : async (req, res, next) => {
  let key = Object.keys(req.body)[0];
  let value = Object.values(req.body)[0];
  const updated = {
    [`${key}`]: value,
  };
  try {
    await Client.findByIdAndUpdate({ _id: req.params.id }, updated);
    res.send(`${key} updated to ${value}`);
  } catch (err) {
    res.send(err.message);
  }
}
}

module.exports = ClientsController;

