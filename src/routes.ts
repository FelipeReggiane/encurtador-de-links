import { Router } from "express";
import controller from "./controllers/controller";

export const router: Router = Router();

router.post("/short", controller.create);
router.get("/:id", controller.get);
