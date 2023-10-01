const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const salt = bcrypt.genSaltSync(10);
const secret = 'ajkdflasjhfslah617t76dg78gd7812y';

app.use(cors({ credentials: true, origin: 'http://localhost:5173', methods: ["GET", "POST"]}));
app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb+srv://recis:A6PzQYSKNuNnXum2@cluster0.0afnatd.mongodb.net/?retryWrites=true&w=majority');

app.get('/tes', (req, res) => {
  res.json('test')
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
    })
  } else {
    res.status(400).json('wrong credentials');
  }

})



app.listen(3001);