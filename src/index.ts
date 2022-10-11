import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

// not found
app.use((req: any, res: any, next: any)=> {
    const error: any = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
  // catch all
  app.use((error: any, req: any, res: any, next: any) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
  });

app.listen(4000);
