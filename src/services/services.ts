import crypto from "crypto";
import repositories from "../repositories/repositories";

const shortingUrl = (url: string) => {
  const shortString = crypto.randomBytes(3).toString("hex");
  console.log("entrou services");
  const shortenedUrl = {
    [shortString]: url,
  };
  repositories.urlWriteFile(shortenedUrl);
  return shortString;
};

const searchUrl = async (shortString: any) => {
  const urls: { [key: string]: string }[] = await repositories.urlReadFile();
  console.log({ urls, shortString });

  const url = urls.reduce((acc: any, cur: any) => {
    for (const key in cur) {
      console.log({ key: key });
      if (key === shortString.id) acc.push(cur[key]);
      console.log({ cur: cur[key] });
    }
    console.log({ acc });
    return acc;
  }, []);

  return url;
};

export default { shortingUrl, searchUrl };
