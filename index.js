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




// const getUser = () => undefined;

app.use((req, res, next) => {
  res.setHeader(
    "React app URL"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

//middleware
// app.use(errorHandler);
app.use("/api/students/",StudentRoute);

// app.use(cookieParser());

// listining port
app.get('/', (req, res) => {

    res.send('Hello from mandar !')
    
    });
    app.listen(port, () => console.log(`The site is on port  http://localhost:${port}`));
    

