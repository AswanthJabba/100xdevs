const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const db = require('../db/index');
const user = db.User;
const course = db.Course;

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const existingUser = await user.findOne({username: req.body.username});
    if(existingUser){
        return res.status(404).send('username already exists')
    }
    const username = req.body.username;
    const password = req.body.password;
    user.create({
        username : username,
        password : password
    })
    res.json({
        msg:"User created successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement user signup logic
    const existingUser = await user.findOne({username: req.body.username});
    if(!existingUser){
        return res.status(404).send('username does not exist')
    }
    const username = req.body.username;
    const token = jwt.sign(username, process.env.JWT_PASSWORD );
    
    const filter = {username: username};
    const update = {jwtAuth: token};
    const userData = await user.findOneAndUpdate(filter, update);
    res.json({token: token});
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await course.find({});
    res.json({
        courses: courses
    });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const filter = {username: username};
    const update = {$push: { courses: req.params.courseId }};
    const userData = await user.findOneAndUpdate(filter, update);
    if(userData){
        return res.status(200).send('course added successfully');
    }
    else{
        return res.status(404).send('user not found');
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const userData = await user.findOne({username: username});
    // console.log(userData)
    if(userData){
        const courses = userData.courses;
        let courseList = [];
        for (let index = 0; index < courses.length; index++) {
            const element = courses[index];
            const coursedata = await course.findOne({courseId: element});
            if(coursedata){
                courseList.push(coursedata);
            }
        }
        res.status(200).json(courseList);
    }
    else{
        res.status(404).send('user not found');
    }
});

module.exports = router