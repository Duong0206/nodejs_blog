const Course = require('../models/Course');
class SiteController {
    //trang chủ
    async index(req, res) {

        try {
            const courses = await Course.find({});
            res.json(courses);
            
        } catch (error) {
            res.status(400).json({error: 'ERROR!!!'});
            
        }

        res.render('home');
    }

    //trang tìm kiếm
    search(req, res) {
        res.send('search');
    }


    //trang thông tin
    info(req, res) {
        res.send('infomation');
    }

    //trang đăng ký
    register(req, res){
        res.render('register');
    }

    //trang đăng nhập
    login(req, res){
        res.render('login');
    }


}

module.exports = new SiteController();
