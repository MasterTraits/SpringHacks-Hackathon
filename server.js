import express from 'express';

const app = express();  

app.get('/login', (req, res) => { 
  res.send('Hello World');
}); 
