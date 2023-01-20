const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

const request = require("request");

const { GET_ALL_BADGES } = require("./Models/queries/badges/badges");

app.use(cors());
// Body Parser START
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// Body Parser END

app.get("/getBadges", (res, req) => {
  request(
    `https://leetcode.com/graphql?query=${GET_ALL_BADGES}`,
    function (error, response, body) {
      req.send(body);
    }
  );
});
app.listen(port, console.log(`Server is running on port ${port}`));
