import fs from "fs";
import axios from "axios";

export async function urlReadFile() {
  return (await axios.get("http://localhost:3000/urls")).data;
}

async function urlWriteFile(url: { [key: string]: string }) {
  await axios.post("http://localhost:3000/urls", url);
}

export default { urlWriteFile, urlReadFile };
