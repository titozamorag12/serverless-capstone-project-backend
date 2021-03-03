import "source-map-support/register";
import { deleteExecutionItem } from "../../businessLogic/executions";
import { executionExists } from "../../businessLogic/executions";

import * as express from "express";
import * as awsServerlessExpress from "aws-serverless-express";

const app = express();

app.delete("/executions/:executionId", async (_req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Rquested-With, Content-Type, Accept"
  );

  const executionId = _req.params.executionId;
  const validateExecution = await executionExists(executionId);

  if (!validateExecution) {
    res.json({
      body: JSON.stringify({
        error: "QA Execution does not exist",
      }),
    });
    res.status(404).send();
  }

  await deleteExecutionItem(executionId);
  res.status(200).send();
});

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
