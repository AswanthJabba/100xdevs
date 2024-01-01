// Middleware for handling auth
const db = require('../db/index')
const user = db.User

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userData = await user.findOne({username: req.headers['username']});
    // console.log(userData, req.headers['username'])
    if(!userData){
        return res.status(404).send('username does not exists')
    }
    else{
        const userPassword = userData.password;
        if (req.headers['password'] != userPassword) {
            return res.status(401).send('wrong password')
        } else {
            next();            
        }
    }
}

module.exports = userMiddleware;