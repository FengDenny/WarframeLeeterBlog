const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

const { readdirSync } = require("fs");

app.use(cors());

// Body Parser START
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// Body Parser END

readdirSync("./routes").map((route) =>
  app.use("/", require(`./routes/${route}`))
);

app.listen(port, console.log(`Server is running on port ${port}`));
