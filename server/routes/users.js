const express = require("express");
const Sequelize = require('sequelize');
var crypto = require('crypto');

const routesFunction = (sequelize) => {
    const router = express.Router();

    const User = require('../models/users')(sequelize, Sequelize.DataTypes);

    router.post('/', (req, res) => {
        User.create({email: req.body.email,
                 name: req.body.name,
                 password: crypto.createHash('md5').update(req.body.password).digest("hex"),
        })

         res.status(200).send("OK");
        });

return router;
};

module.exports = routesFunction;
