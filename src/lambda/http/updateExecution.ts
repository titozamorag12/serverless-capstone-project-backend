import "source-map-support/register";

import { UpdateExecutionRequest } from "../../requests/UpdateExecutionRequest";
import { updateExecutionItem } from "../../businessLogic/executions";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as awsServerlessExpress from "aws-serverless-express";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.patch("/executions/:executionId", async (_req, res) => {
  const authorization = _req.headers.authorization;
  const split = authorization.split(" ");
  const jwtToken = split[1];
  const executionId = _req.params.executionId;

  const updatedItem: UpdateExecutionRequest = _req.body;
  await updateExecutionItem(executionId, updatedItem, jwtToken);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Rquested-With, Content-Type, Accept"
  );
  res.status(200).send();
});

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
