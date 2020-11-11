const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// GET posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).sort({ createdAt: -1 }).limit(10).toArray());
});

// CREATE posts
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    sum: req.body.sum,
    firstVal: req.body.firstVal,
    secondVal: req.body.secondVal,
    operator: req.body.operator,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// DELETE posts
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://jonAlden:!Q@W3e4r@cluster0-nfmpu.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  return client.db("vue_app").collection("posts");
}

module.exports = router;
