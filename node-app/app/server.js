const { Client } = require("pg");
const express = require("express");
const path = require("path");
const app = express();
const port = 80;

const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD + "",
  database: process.env.POSTGRES_DB,
  query_timeout: 200
});

const getDBDate = async (req, res) => {
  await client
    .query("SELECT NOW()")
    .then((payload) => {
      const dbRow = payload.rows?.[0] ?? {}
      const result = {...dbRow, user: process.env.POSTGRES_USER}
      res.status(200).json(result);
    })
    .catch(() => {
      res.sendStatus(404)
    });
};

app.use(express.static(path.join(__dirname, 'public')));
app.get("/api", getDBDate);


(async () => {
  try {
    await client.connect();
    console.log("Connected to db");
  } catch (e) {
    console.log("connection to db error", e);
  }

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });
})();
