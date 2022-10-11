import express, { Request, Response } from "express";
import services from "../services/services";

const create = (request: Request, response: Response, next: any) => {
  const url = request.body.url;
  if(!url){
    const error = new Error("Could not find URL in request");
    return next(error);
  }
  try {
    const returnService = services.shortingUrl(url);
    return response.status(200).json({
      message:
        "Link encurtado com sucesso o novo link é http://localhost:4000/" +
        returnService,
    });
  } catch (error) {
    return next(error)
  }
};

const get = async (request: Request, response: Response, next: any) => {
  try {
    const { id } = request.params;
    console.log({ id });
    const returnService = await services.searchUrl(id);
    return response.redirect(302, returnService);
  } catch (error) {
    return next()
    // return response.status(404).json({ message: "Not Found" });
  }
};

export default { create, get };
