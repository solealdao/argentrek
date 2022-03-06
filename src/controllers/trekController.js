const fs = require('fs');
const path = require('path');


let trekController = {
    create: function (req, res) {
        res.render(path.resolve(__dirname,"../views/treks/trekCreate.ejs"))
        },
    
    detail: function(req, res) {
        res.render(path.resolve(__dirname,"../views/treks/trekDetail.ejs"))
    }
}


module.exports = trekController;