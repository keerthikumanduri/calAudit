import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import { Navbar } from "../components/Navbar";
import { Filter } from "../components/Filter";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className="h-screen"
      style={{
        backgroundImage: "url('/dark.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar/>
      <Filter/>
    </main>
  );
}
