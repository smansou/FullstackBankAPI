const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const accountRouter = require("./routes/account.routes");
const clientRouter = require("./routes/client.routes");
const cors = require('cors');




mongoose
.connect(config.mongo.url)
.then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err))

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/accounts', accountRouter);
app.use('/clients', clientRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  if (error) console.error(error);
  else console.log(`Server is listening on port ${PORT}`);
});





