const cart = require ('./cart');
const fs = require ('fs');
const logger = require ('./logger');
const actions = {
    add: cart.add,
    change: cart.change,
    delete: cart.remove
};


let handler = (req, res, action, file) => {
    fs.readFile (file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({result: 0, text: 'same error'}));
        } else {
            let {newCart, name} = actions [action] (JSON.parse (data), req);
            fs.writeFile (file, newCart, (err) => {
                if (err) {
                    res.sendStatus (404, JSON.stringify ({result: 0, text: 'same error'})); 
                } else {
                    logger (name, action)
                    res.send ({result: 1, text: 'success'}) ; 
                }
            });
        };
    });
};

module.exports = handler;