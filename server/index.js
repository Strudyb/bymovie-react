const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let rawdata = fs.readFileSync("data.json");
let blogs = JSON.parse(rawdata);

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.get("/api", (req, res) => {
  res.json({
    blogs: blogs,
  });
});

app.post("/create", (req, res) => {
  // console.log("Got body:", req.body);

  //  data object
  const newBlog = {
    id: req.body.blogId,
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    img: req.body.img,
  };

  blogs.push(newBlog);
  console.log(blogs);

  res.status(200).send(blogs);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
