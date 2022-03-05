const fs = require('fs');
const path = require('path');


let mainController = {
    home: function (req, res) {
        res.render(path.resolve(__dirname,"../views/home.ejs"))
        }
}


module.exports = mainController;