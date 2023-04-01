const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));


app.use('/',require('./router.js'));

app.listen(PORT)