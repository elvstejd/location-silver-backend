const express = require('express');
const router = express.Router();
const Listing = require('../models/Listings');

/* GET all listings */
router.get('/', async (req, res) => {
    const listings = await Listing.find();
    res.send(listings);
});

/* GET single listing provided an Id */
router.get('/:id', async (req, res) => {
    try {
        const listing = await Listing.findOne({ _id: req.params.id });
        if (!listing) {
            res.status(404);
            res.send({ error: "No listing by that id" });
            return;
        }
        res.send(listing);
    } catch {

    }
});

/* POST a listing */
router.post('/', async (req, res) => {
    const listing = new Listing({
        imageUrl: req.body.imageUrl,
        address: req.body.address,
        sector: req.body.sector,
        price: req.body.price,
        location: {
            long: req.body.location.long,
            lat: req.body.location.lat,
        }
    });

    await listing.save();
    res.status(201).send(listing);
});


module.exports = router;