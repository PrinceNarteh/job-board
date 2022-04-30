import "dotenv/config";
import express from "express";
import cors from "cors";
import {expressJwt} from "./utils/expressJwt";
import {logger} from "./utils/logger";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors(), express.json(), expressJwt);

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
