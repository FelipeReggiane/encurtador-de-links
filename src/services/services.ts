import crypto from "crypto";
import repositories from "../repositories/repositories";

const shortingUrl = (url: string) => {
  const shortString = crypto.randomBytes(3).toString("hex");
  repositories.urlWriteFile(url, shortString);
  return shortString;
};

const searchUrl = async (shortString: string) => {
  const url: string = await repositories.urlReadFile(shortString);
  return url;
};

export default { shortingUrl, searchUrl };
