const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const StudentRoute = require("./Routes/student.js");
const app = express();
const port = 4000;

// Define CORS options
const corsOptions = {
 origin: 'https://stu-db-client-9qv8.vercel.app',
 methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
 allowedHeaders: ['Content-Type', 'Authorization'],
 credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Body-parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to DB
const mongoDBURI = 'mongodb+srv://Vandana100:Vandana100@assinment1.nrbtdv2.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(mongoDBURI);
console.log(mongoose.connection.readyState);

// Define routes
app.use("/api/students/", StudentRoute);

// Default route
app.get('/', (req, res) => {
 res.send('Hello from mandar!');
});

// Start server
app.listen(port, () => console.log(`The site is on port http://localhost:${port}`));
