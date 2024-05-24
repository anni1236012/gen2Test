"use client";
import Image from "next/image";
import Link from "next/link";
import { Amplify } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter, usePathname } from "next/navigation";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);

export default function Navbar() {
  const { user, signOut, authStatus } = useAuthenticator((context) => [
    context.user,
  ]);
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/chat") return null;

  if (pathname === "/login" && authStatus === "authenticated") {
    router.push("/");
  }

  return (
    <nav className="sticky top-0 z-10 backdrop-blur-2xl  flex w-full items-center justify-between ">
      {/* Stick on the left side */}
      <div className="flex flex-shrink-0 gap-6 pl-[8%]">
        <div className="flex justify-center items-center gap-8 ">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/chat" className="">
            Chat
          </Link>
          <Link href="/about" className="">
            About
          </Link>
        </div>
      </div>

      {/* Stick on the right hand side  */}
      <div className="flex pr-[8%] gap-6 ">
        {authStatus === "authenticated" && (
          <button
            className="p-2 bg-blue-700 rounded-lg text-white"
            onClick={signOut}
          >
            Sign Out
          </button>
        )}
        {authStatus !== "authenticated" && (
          <Link href="/login" className="p-2 bg-blue-700 rounded-lg text-white">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
