// Middleware for handling auth
const jwt = require('jsonwebtoken')

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, process.env.JWT_PASSWORD);
    
    console.log(decodedValue+"\n");
    if (decodedValue) {    
        req.username = decodedValue;
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }
}

module.exports = adminMiddleware;