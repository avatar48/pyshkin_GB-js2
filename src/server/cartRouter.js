const express = require ('express');
const fs = require ('fs');
const handler = require ('./handler');

const router = express.Router ();

router.get ('/', (req, res) => {
    fs.readFile ('src/server/db/userCart.json', 'utf-8', (err,data) => {
        if (err) {
           res.sendStatus (404, JSON.stringify ({result: 0, text: 'same error'}))
        } else {
            res.send (data)
        }
    })
});
router.delete ('/:id', (req, res) => {
    handler (req, res, 'delete', 'src/server/db/userCart.json');
});

router.post ('/', (req, res) => {
    handler (req, res, 'add', 'src/server/db/userCart.json');
});

router.put ('/:id', (req, res) => {
    handler (req, res, 'change', 'src/server/db/userCart.json');
});


module.exports = router;
