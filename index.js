const  express = require('express')
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const cors = require("cors");

const StudentRoute = require("./Routes/student.js");
const app = express()
const port = 4000

const corsOptions = {
  origin: /\.onrender\.com$/,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",};
app.use(cors(corsOptions));



// Body-parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParser());

// connecting db
// const mongoDBURI = 'mongodb://localhost:27017/studentDB';
const mongoDBURI = 'mongodb+srv://Vandana100:Vandana100@assinment1.nrbtdv2.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(mongoDBURI);
console.log(mongoose.connection.readyState);


app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "React app URL"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


// const getUser = () => undefined;



//middleware
// app.use(errorHandler);
app.use("/api/students/",StudentRoute);

// app.use(cookieParser());

// listining port
app.get('/', (req, res) => {

    res.send('Hello from mandar !')
    
    });
    app.listen(port, () => console.log(`The site is on port  http://localhost:${port}`));
    

