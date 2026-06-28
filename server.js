const express = require ('express');
const app = express();

app.use((req,res,next) => {

    console.log(`Request ai :  ${req.method} ${req.url}`);
    next();

});

app.get('/', (req, res)=>{
    res.send('Home page');
});



const checkQuery = (req,res,next) =>{
    if (req.query.token === '123'){
        next();
    }else{
        res.status(403).send("Access denied, token is missing or invalid");
    }
};

app.get('/protected', checkQuery, (req,res) => {
    res.send('This is a protected route, you have access because you provided the correct token.');


});

app.listen(3000, ()=> console.log('Server is running on port 3000'));
