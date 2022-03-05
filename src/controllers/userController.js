const path = require('path');


let userController = {
    register: function (req, res) {
        res.render(path.resolve(__dirname,"../views/users/register.ejs"))
        }
}

module.exports= userController;
