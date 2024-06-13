const express = require("express");

const bodyParser = require("body-parser");

const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

const path = require("path");

app.use(bodyParser.json());

app.get("/data", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data.");
    } else {
      const items = JSON.parse(data);

      res.send(items);
    }
  });
});

app.get("/data/paginated", (req, res) => {
  const page = parseInt(req.query.page) || 1;

  const limit = parseInt(req.query.limit) || 10;

  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data.");
    } else {
      const items = JSON.parse(data);

      const startIndex = (page - 1) * limit;

      const paginatedItems = items.slice(startIndex, startIndex + limit);

      res.send({
        items: paginatedItems,

        page: page,

        limit: limit,
      });
    }
  });
});

app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;

  const imagePath = path.join(__dirname, "images", "defaultImage.jpeg");

  res.sendFile(imagePath, (err) => {
    if (err) {
      if (!res.headersSent) {
        res.status(404).send("Image not found.");
      }
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
