const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'ajkdflasjhfslah617t76dg78gd7812y';

app.use(cors({ credentials: true, origin: 'http://localhost:5173', methods: ["GET", "POST"]}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));



mongoose.connect('mongodb+srv://recis:A6PzQYSKNuNnXum2@cluster0.0afnatd.mongodb.net/?retryWrites=true&w=majority');


const tokenExpiration = '1h';

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
    jwt.sign({ username, id: userDoc._id }, secret, { expiresIn: tokenExpiration }, (err, token) => {
      if (err) throw err;
      res.cookie('token', token, { expires: 0, httpOnly: true }).json({
        id:userDoc._id,
        username,
        token,
      });
    })
  } else {
    res.status(400).json('wrong credentials');
  }

})

app.get('/admin', (req, res) => {
 res.json('get admin berhasil');
});

// app.post('/post', uploadMiddleware.single('file'), (req, res) => {
//   res.json({files:req.file});
// })

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, newPath);
 
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
     if (err) throw err;
     const authorId = info.id;
     const { title, desc,content,cover, author} = req.body;
     const postDoc = await Post.create({
       title,
       desc,
       content,
       cover:newPath,
       author:authorId,
     });
     res.json(postDoc);
  });
 });
 
 app.put('/post/:id', uploadMiddleware.single('file'), async (req, res) => {
  const {id} = req.params;
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, newPath);
 
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
     if (err) throw err;
     const authorId = info.id;
     const { title, desc,content,cover, author} = req.body;
     const postDoc = await Post.findByIdAndUpdate(id, {
       title,
       desc,
       content,
       cover:newPath,
       author:authorId,
     }, {new: true});
     res.json(postDoc);
  });

});





app.get('/post', async (req,res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
      .limit(20)
  );
});

app.get('/post/:id', async (req, res) => {
  
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
});



app.listen(process.env.APP_PORT);