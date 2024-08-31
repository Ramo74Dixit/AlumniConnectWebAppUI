// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI environment variable is not set');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Define the Alumni, College, and Student schemas and models
const alumniSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const collegeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Alumni = mongoose.model('Alumni', alumniSchema);
const College = mongoose.model('College', collegeSchema);
const Student = mongoose.model('Student', studentSchema);

// Routes for registering users
app.post('/register/alumnilist', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newAlumni = new Alumni({ name, email, password });
    await newAlumni.save();
    res.status(201).json({ message: 'Alumni registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering alumni', details: error.message });
    console.error('Error saving alumni:', error.message);
  }
});

app.post('/register/colleges', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newCollege = new College({ name, email, password });
    await newCollege.save();
    res.status(201).json({ message: 'College registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering college', details: error.message });
    console.error('Error saving college:', error.message);
  }
});

app.post('/register/students', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newStudent = new Student({ name, email, password });
    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering student', details: error.message });
    console.error('Error saving student:', error.message);
  }
});

// Login routes for Alumni, College, and Student
app.post('/login-alumnilist', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const alumni = await Alumni.findOne({ email: emailOrPhone });

    if (!alumni || alumni.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', alumni });
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error.message });
  }
});

app.post('/login-colleges', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const college = await College.findOne({ email: emailOrPhone });

    if (!college || college.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', college });
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error.message });
  }
});

app.post('/login-students', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const student = await Student.findOne({ email: emailOrPhone });

    if (!student || student.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', student });
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error.message });
  }
});

// Connect to MongoDB and start the server
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
