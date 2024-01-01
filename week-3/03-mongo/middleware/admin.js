// Middleware for handling auth
const db = require('../db/index')
const admin = db.Admin

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const adminData = await admin.findOne({username: req.headers['username']});
    // console.log(req)
    if(!adminData){
        return res.status(404).send('username does not exists')
    }
    else{
        const adminPassword = adminData.password;
        if (req.headers['password'] != adminPassword) {
            return res.status(401).send('wrong password')
        } else {
            next();            
        }
    }
}

module.exports = adminMiddleware;