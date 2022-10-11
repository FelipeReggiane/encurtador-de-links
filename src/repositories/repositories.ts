import axios from "axios";
import { preProcessFile } from "typescript";
import config from "../../knexfile";

const knex = require("knex")(config);

export async function urlReadFile(shortUrl: string) {
  console.log({ shortUrl });
  const url = await knex
    .select("url")
    .where({ shortUrl: shortUrl })
    .table("url")
    .first();
  console.log(url);
  return await url.url;
}

async function urlWriteFile(url: string, shortUrl: string) {
  const newUrl = await knex("url").insert({ shortUrl, url });
  console.log({ newUrl });
  return await newUrl;
}

export default { urlWriteFile, urlReadFile };
