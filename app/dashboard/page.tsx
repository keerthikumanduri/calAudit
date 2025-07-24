import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <h1 className="text-4xl text-black">Welcome, {session.user?.name}!</h1>
    </main>
  );
}
