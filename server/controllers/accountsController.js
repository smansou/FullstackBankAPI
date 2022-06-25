const express = require("express");
const mongoose = require("mongoose");
const Account = require("../models/account");

const AccountsController = {
  getAccount: async (req, res, next) => {
    let account;
    try {
      account = await Account.findById(req.params.id);
      if (!account) {
        return res.status(400).send({ message: "Account not found" });
      } else {
        res.status(200).send(account);
      }
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
    //set account as prop on res obj to be available in other functions
    res.account = account;
    next();
  },

  getAllAccounts: async (req, res, next) => {
    try {
      const accounts = await Account.find();
      res.status(200).send(accounts);
    } catch (err) {}
    next();
  },

  createAccount: async (req, res, next) => {
    const account = new Account({
      owner: req.body.owner
    });
    try {
      await account.save();
      res.status(201).send("Account Created! ===>  " + account);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  deleteAccount: async (req, res, next) => {
    try {
      await res.account.remove();
      res.send({ message: "Account deleted successfully" });
    } catch (err) {
      res.send(err.message);
    }
  },

  updateAccount: async (req, res, next) => {
    let key = Object.keys(req.body)[0];
    let value = Object.values(req.body)[0];
    const updated = {
      [`${key}`]: value,
    };
    try {
      await Account.findByIdAndUpdate({ _id: req.params.id }, updated);
      res.send(`${key} updated to ${value}`);
    } catch (err) {
      res.send(err.message);
    }
  },
};

module.exports = AccountsController;
