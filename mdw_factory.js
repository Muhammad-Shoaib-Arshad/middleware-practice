const express = require ('express');
const app = express();

app.use((req,res,next) => {

    console.log(`Request ai :  ${req.method} ${req.url}`);
    next();

});

app.get('/', (req, res)=>{
    res.send('Home page');
});



const restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.query.role; // normally yeh JWT se aata hai, abhi practice ke liye query se le rahe hain
    if (allowedRoles.includes(userRole)) {
      next();
    } else {
      res.status(403).send(`Access denied. Required roles: ${allowedRoles.join(', ')}`);
    }
  };
};

app.get('/admin-only', restrictTo('admin'), (req, res) => {
  res.send('Welcome admin!');
});

app.get('/admin-or-editor', restrictTo('admin', 'editor'), (req, res) => {
  res.send('Welcome admin or editor!');
});

app.listen(3000, ()=> console.log('Server is running on port 3000'));
