"use client"
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


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
          <div className="flex justify-center mb-4 ">         
            <p className="text-white font-extrabold text-6xl">CalAudit</p>
          </div>
          <p className="flex justify-center items-center dark:text-gray-500 text-black text-xl">Comprehensive Audit logging for Cal.com</p>  
        <div className="flex flex-col gap-4 mt-6">
          <button className="bg-white text-black px-4 py-3 rounded-md flex flex-row items-center justify-center shadow font-medium cursor-pointer">
            <CircleCheck className="w-5 h-5 text-white fill-black mr-2"/>
            Continue with Cal.com
          </button>
          <button className="bg-gray-900 dark:text-white px-4 py-3 rounded-md shadow flex flex-row items-center justify-center font-medium cursor-pointer">
            <Image
              className="mr-2"
              src="/google.svg"
              alt="Google-logo"
              width={20}
              height={20}
            />
            Continue with Google
          </button>
        </div>

        {/* remember me div */}
        <div className="flex justify-center items-center dark: text-gray-500 mt-5">          
            <input type="checkbox" />
            <label className="ml-1" htmlFor="remember">Remember me on this device</label>
        </div>

        {/* Signup for cal div */}
        <div className="flex justify-center items-center dark: text-gray-500 mt-5">
          <p className="text-sm mr-2">Don’t have an account?</p>
          <Link href="https://app.cal.com/signup" className="text-sm text-white">Signup for Cal.com</Link>
        </div>
      </div>      

    </main>
  );
}