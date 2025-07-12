"use client"

export default function HomePage() {
  return (
    <main className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/dark.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black p-8 rounded-xl w-full max-w-md">
          <p className="text-white text-center text-6xl font-extrabold  z-10 mb-4">CalAudit</p>
          <p className="flex justify-center items-center dark:text-white text-black text-xl">Audit logging for Cal.com</p>  
        <div className="flex flex-col gap-4 mt-6">
          <button className="bg-white text-black px-4 py-2 rounded-md shadow">
            Continue with Cal.com
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-md shadow">
            Continue with Google
          </button>
        </div>
      </div>      

    </main>
  );
}
