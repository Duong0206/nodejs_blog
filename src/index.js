const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3002;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
));
app.set('view engine', 'hbs');

// cấu hình thư mục chứa view
// app.set('views', './views');
app.set('views', path.join(__dirname, 'resource/views'));



//route trang chủ
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/news', (req, res) => {
    res.render('news')
});
    



// lắng nghe cổng 3002
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 