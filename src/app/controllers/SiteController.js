const Course = require('../models/Course');
class SiteController {
    //Get /neww
    async index(req, res) {

        try {
            const courses = await Course.find({});
            res.json(courses);
            
        } catch (error) {
            res.status(400).json({error: 'ERROR!!!'});
            
        }

        res.render('home');
    }

    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
