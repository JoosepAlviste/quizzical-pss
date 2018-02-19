const express = require("express");
const Sequelize = require('sequelize');

const routesFunction = (sequelize) => {
    const router = express.Router();

    const User = require('../models/users')(sequelize, Sequelize.DataTypes);

    router.post('/', (req, res) => {
        User.create({email: req.body.email,
                 name: req.body.name,
                 password: req.body.password
        })

         res.status(200).send("OK");
        });

return router;
};

module.exports = routesFunction;