const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('./static'));

app.use(bodyParser.urlencoded({ extended: false }));

const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');

app.use(mainRoutes);
app.use(authRoutes);

const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server running @${port}`);
});