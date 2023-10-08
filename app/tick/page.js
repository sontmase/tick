import React from "react";
import { TwitterSignOutButton } from "../../components/Button/authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "../../lib/auth";
import { redirect } from "next/navigation";
export default async function SignOutPage() {
  const session = await getServerSession(authConfig);

  console.log("Session3: ", session);

  if (!session) return redirect("/");

  return (
    <div>
      <TwitterSignOutButton />
    </div>
  );
}
