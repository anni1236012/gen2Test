"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@/amplifyconfiguration";
export default function GlobalContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
