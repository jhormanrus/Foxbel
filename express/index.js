/* eslint-disable no-undef */
import fetch from "node-fetch";
import express from "express";

const app = express();
const port = 5000;

const configService = {
  apiUrl: "https://api.deezer.com",
};

app.get("/search", async (req, res) => {
  const { q } = req.query;
  const response = await fetch(`${configService.apiUrl}/search?q=${q}`).then(
    (response) => response.json()
  );
  res.send(response);
});

app.listen(port, () => {
  console.log(`Foxbel api listening on port ${port}`);
});
