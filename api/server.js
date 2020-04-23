const express = require("express");

const db = require("../data/dbConfig.js");
const accountsRouter = require("../router/accountsRouter")

const server = express();

server.use(express.json());
server.use("/api/accounts", accountsRouter)


server.get("/", (req, res) => {
    res.send("Welcome to our API!!")
})

module.exports = server;
