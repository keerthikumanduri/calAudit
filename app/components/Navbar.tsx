// components/Navbar.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import { ChevronDown, LogOut, Building2 } from "lucide-react";
import { DropdownMenu,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { data: session } = useSession();

  const user = session?.user;
  const teamName = "Acme Corp"; // later make dynamic
  const userName = user?.name || "Loading...";
  const userRole = "admin"; // later: determine from Cal.com team API

  return (
    <nav className="">
      {/* left app name */}
      <div className="bg-black px-15 py-3 flex items-center justify-between">
        <div>
          <span className="text-white font-bold text-xl pr-1">Cal.com</span>
          <span className="text-white">|</span>
          <span className="text-white font-bold text-xl pl-1">Audit</span>
        </div>

        {/* dropdown */}
        <div className="flex text-white items-center">
          <div className="border-1 border-gray-700 bg-gray-800 px-3 py-2 mr-2 rounded flex items-center cursor-pointer">
            <Building2 size={20} className="mr-2"/>
            <DropdownMenu>
              <DropdownMenuTrigger>{teamName}</DropdownMenuTrigger>
            </DropdownMenu>
            <ChevronDown size={15} className="ml-3"/>
          </div>

        {/* profile details */}
          <div className="ml-5 mr-5 w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center">
            {userName
              .split(" ")
              .map((initial) => initial[0])
              .join("")
              .toUpperCase()}
          </div>
          <div className="mr-7">
            <div className="text-right leading-tight text-sm">
            <div className="font-medium">{userName}</div>
            <div className="text-xs text-gray-400">
              {teamName} · {userRole}
            </div>
          </div>
          </div>

          {/* signout */}
          <button onClick={() => signOut()} className="cursor-pointer">
            <LogOut size={20}/>
          </button>
        </div>
      </div>

      
    </nav>
  );
}
