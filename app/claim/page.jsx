import React from "react";
import { getServerSession } from "next-auth";
import { authConfig } from "../../lib/auth";
import { redirect } from "next/navigation";
export default async function SignOutPage() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");

  return (
    <div>
      <p>claim page</p>
    </div>
  );
}
