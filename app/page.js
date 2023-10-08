import { getServerSession } from "next-auth";
import { authConfig } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authConfig);
  console.log("Session: ", session);

  if (session) return redirect("/tick");

  return (
    <div>
      <p>Main page</p>
    </div>
  );
}
