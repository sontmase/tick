import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Twitter from "next-auth/providers/twitter";

export const authConfig = {
  providers: [
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  }
}
