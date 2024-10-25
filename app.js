// app.js
const express = require('express');



const app = express();
const path = require('path');
const collection=require("./mongodb")




const port = 3000;


// Set the views directory
app.set('views', path.join(__dirname, '../views'));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))





// Define a route that renders a view
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.post('/register', async (req, res) => {
  const info={
    name:req.body.name,
    username:req.body.username,
    email:req.body.email,
    password:req.body. password,
    
  }
  await collection.insertMany([info])

  res.render('home')
});
app.post('/login', async (req, res) => {
  
 try {
  const check=await collection.findOne({username:req.body.username})


  if(check.password===req.body.password){
    res.render('student_dash')
  }
  else{
    res.send("wrong password")
  }
 } catch {
  res.send("Invalid Credentials")
 }

  res.render('home')
});


app.get('/student_dash', (req, res) => {
  

  res.render('student_dash');
});



app.get('/sem1', (req, res) => {
  res.render('sem1');
});


app.get('/resource1', (req, res) => {
  res.render('resource1');
});
app.get('/sem2', (req, res) => {
  res.render('sem2');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/applied', (req, res) => {
  res.render('applied');


});
app.get('/schudeler', (req, res) => {
  res.render('schudelers');
});
app.get('/interview', (req, res) => {
  res.render('interview');
});
















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
