const express = require("express");
const rootRouter = require("./routes/index");
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, (req,res)=>{
  console.log(`Serve listening on port ${port}`)
});