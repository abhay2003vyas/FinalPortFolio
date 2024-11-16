const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');


const app = express();
const port = 5000;
const cors = require('cors',);
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://abhay:sjdd3rtet8dsuh@cluster0.l8ty0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(express.json()); // Middleware to parse JSON
app.use('/api', router); // Register routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});