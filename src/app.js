const express = require("express");
const app = express();


const Detail = require("../src/db/conn");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", (req, res) =>{
   res.send("oye hello");
})

app.post("/xyz", async (req, res) =>{
   const addingdetails = new Detail(req.body)
   console.log(req.body);
   const insertDetail = await addingdetails.save();
   res.send(insertDetail);
})

app.listen(port, () => {
    console.log(`Serving is running on ${port}`);
});
