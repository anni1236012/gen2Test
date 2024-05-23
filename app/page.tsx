"use client";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);
const currentConfig = Amplify.getConfig();

export default function Home() {
  return (
    <div>
      Hello There
      <h1> Url is : {outputs.custom.my_function_url}</h1>
    </div>
  );
}
