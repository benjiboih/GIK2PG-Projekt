const express = require('express');
const app = express();
const fs = require("fs").promises;

var getAllProducts = require("./routes/getAllProducts");
var getProductById = require("./routes/getProductById");
var getAllReviewsByProductId = require("./routes/getAllReviewsByProductId");

app
.use(express.json())
.use(express.urlencoded({extended: false}))
.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");

  next();
});



app.get("/", (req, res) => {
  res.send("Hej varlden123");
});



app.use("/getAllProducts", getAllProducts);
app.use("/getProductById", getProductById);
app.use("/getAllReviewsByProductId", getAllReviewsByProductId);



/*app.get('/', async (req, res) => {
try{
  const homepage = await fs.readFile(".frontend/AppProductList.js");
  res.send(JSON.parse(homepage));
}
  catch (error) {
    res.status(500).send({ error });
  }

});
*/
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
})