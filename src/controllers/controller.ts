import express, { Request, Response } from "express";
import services from "../services/services";

const create = (request: Request, response: Response) => {
  try {
    const url = request.body.url;
    const returnService = services.shortingUrl(url);
    return response.status(200).json({
      message:
        "Link encurtado com sucesso o novo link é http://localhost:4000/" +
        returnService,
    });
  } catch (error) {
    return response.status(400).json({ message: "Houve algum erro" });
  }
};

const get = async (request: Request, response: Response) => {
  try {
    const id = request.params;
    const returnService = await services.searchUrl(id);
    return response.redirect(returnService, 302);
  } catch (error) {
    return response.status(400).json({ message: "Houve algum erro" });
  }
};

export default { create, get };
