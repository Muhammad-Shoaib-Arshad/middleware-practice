const express = require ('express');
const app = express();

app.use((req,res,next) => {

    console.log(`Request ai :  ${req.method} ${req.url}`);
    next();

});

app.get('/', (req, res)=>{
    res.send('Home page');
});


app.use(( req,res,next) => {
    req.requestTime= new Date().toISOString();
    next();

})

app.get('/time', (req, res)=>{   
    res.send(`Request time: ${req.requestTime}`);

});








app.listen(3000, ()=> console.log('Server is running on port 3000'));
