import "source-map-support/register";
import { getAllExecutionItems } from "../../businessLogic/executions";

import * as express from "express";
import * as awsServerlessExpress from "aws-serverless-express";

const app = express();

app.get("/executions", async (_req, res) => {
  const authorization = _req.headers.authorization;
  const split = authorization.split(" ");
  const jwtToken = split[1];
  const executions = await getAllExecutionItems(jwtToken);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Rquested-With, Content-Type, Accept"
  );
  res.json({
    items: executions,
  });
  res.status(200).send();
});

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
