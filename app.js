const express = require('express')
const app = express()
const db = require('./config/mongoose-connection')
require("dotenv").config();
const path = require('path')
const postRouters = require('./routes/postRouter');
const userRouters = require('./routes/userRouter');
const loginRouters = require('./routes/loginRouter');
const signupRouters = require('./routes/signupRouter');
const homepageRouters = require('./routes/homepageRouter');
const articlePageRouters = require("./routes/articlepageRouter");
const createarticleRouters = require("./routes/createarticleRouter");
const profilePageRouters = require("./routes/profilepageRouter");
const searchPageRouters = require("./routes/searchpageRouter");
const draftPageRouters = require("./routes/draftpageRouter");
const session = require('express-session');
const flash = require('connect-flash');
const PORT = 3000
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));
app.use('/posts',postRouters);
app.use('/users',userRouters);
app.use('/login',loginRouters);
app.use('/signup',signupRouters);
app.use('/homepage',homepageRouters);
app.use('/articles',articlePageRouters);
app.use('/create-article',createarticleRouters);
app.use('/profile-auth',profilePageRouters);
app.use('/search',searchPageRouters);
app.use('/draft-article',draftPageRouters);
app.set('view engine','ejs')
app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true
}));

app.get('/',(req,res)=>{
    res.redirect("/homepage");
})
app.listen(PORT);
