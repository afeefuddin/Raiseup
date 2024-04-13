const express = require("express");
const cors = require("cors");
const {router} = require("./routes/user");
const startupRouter = require('./routes/startup');
const connectDB = require("./config/db");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,OPTIONS,DELETE",
    credentials: true,
  })
);

// Define Routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB()

app.use("/api/users", router);
// app.use("/api/startups",startupRouter );

app.listen(5000, () => {
  console.log("Server Started at port 5000");
});
