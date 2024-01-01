const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const db = require('../db/index')
const admin = db.Admin
const course = db.Course

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const existingUser = await admin.findOne({username: req.body.username});
    if(existingUser){
        return res.status(404).send('username already exists')
    }
    const username = req.body.username;
    const password = req.body.password;
    admin.create({
        username : username,
        password : password
    })
    res.json({
        msg:"User created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const courseId = uid();
    const username = req.headers['username'];
    course.create({
        title: title,
        description : description,
        price: price,
        imageLink: imageLink,
        admin: username,
        courseId: courseId
    })
    const filter = {username: username};
    const update = {$push: { courses: courseId }};
    const adminData = await admin.findOneAndUpdate(filter, update);
    if(adminData){
        return res.status(200).send('course added successfully');
    }
    else{
        return res.status(404).send('user not found');
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const username = req.headers['username'];
    const adminData = await admin.findOne({username: username});
    // console.log(adminData)
    if(adminData){
        const courses = adminData.courses;
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

module.exports = router;