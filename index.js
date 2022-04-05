const express = require("express");
const api = require("./routes/api");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("Hello World");
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
