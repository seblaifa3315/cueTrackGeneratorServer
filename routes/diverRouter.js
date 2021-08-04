const express = require("express");
const Diver = require("../models/diver");
const cors = require("./cors");


const diverRouter = express.Router();

diverRouter
.route("/")
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Diver.find()
    .then((divers) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(divers);
    })
    .catch((err) => next(err))
})
.post(cors.corsWithOptions, (req, res, next) => {
    Diver.create(req.body)
    .then((diver) => {
        console.log("New Diver Created", diver);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(diver)
    })
    .catch((err) => next(err))
})
.delete(cors.corsWithOptions, (req,  res, next) => {
    Diver.findByIdAndDelete(req.body._id)
    .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response)
    })
    .catch((err) => next(err));
})
.put(cors.corsWithOptions, (req, res, next) => {
    Diver.findByIdAndUpdate(
        req.body._id,
        {
            $set: req.body
        },
        { new: true }
    )
    .then((diver) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(diver);
    })
})

module.exports = diverRouter;