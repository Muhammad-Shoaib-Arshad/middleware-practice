const express = require ('express');
const app = express();

app.use((req,res,next) => {

    console.log(`Request ai :  ${req.method} ${req.url}`);
    next();

});

app.get('/', (req, res)=>{
    res.send('Home page');
});



app.use((req,res,next) => {

    console.log('In the middleware 1');
    next();
})

app.use((req,res,next) => {

    console.log('In the middleware 2');
    next();
})

app.get('/about', (req, res)=>{
    console.log('In the about route');
    res.send('About page');
});



app.listen(3000, ()=> console.log('Server is running on port 3000'));
