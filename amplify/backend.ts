import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { sayHello } from "./functions/helloworld/resource";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  sayHello,
});

const lambdaAccess = backend.sayHello.resources.lambda.functionArn;
const authDetails =
  backend.auth.resources.authenticatedUserIamRole.addToPrincipalPolicy(
    new PolicyStatement({
      actions: ["lambda:InvokeFunction"],
      resources: [lambdaAccess],
    })
  );
