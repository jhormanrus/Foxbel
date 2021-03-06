/* eslint-disable no-undef */
import "reflect-metadata";
import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const configService = {
  apiUrl: "https://api.deezer.com",
};

app.get("/search-album", async (req, res) => {
  const { q } = req.query;
  const response = await fetch(
    `${configService.apiUrl}/search/album?q=${q}`
  ).then((response) => response.json());
  res.send(response);
});

app.get("/album/:id", async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`${configService.apiUrl}/album/${id}`).then(
    (response) => response.json()
  );
  res.send(response);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Foxbel api listening on port ${port}`);
});
