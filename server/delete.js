const express = require("express");
const router = express.Router();
const mongo = require("../DB/delete");

//write your code here

router.get("/test", (req, res) => {
  mongo.readData(result => {
    res.json(result);
  });
});

// router.delete('/delete' , (req,res)=>{
//     console.log('object server', req.body)
//     mongo.deleteDoner(req.body,(result)=>{
//         res.json(result)
//     })
// })
router.delete("/delete", (req, res) => {
  console.log("delete---------------------");
  console.log("req.body from delete in server", req.body);
  let deleteItms = req.body._id;
  mongo.deleteDoner(deleteItms, result => {
    res.json(result);
  });
});

module.exports = router;
