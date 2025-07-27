"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Funnel, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Filter() {
  return (
    <div className="bg-black mt-10 px-6 py-4 rounded-xl mx-5">
      {/* Filters Heading */}
      <div className="flex text-white items-center mb-4">
        <Funnel size={20} className="text-gray-300 mr-2" />
        <span className="font-semibold">Filters</span>
      </div>

      {/* Filter Labels */}
      <div className="grid grid-cols-3 gap-4 text-white text-sm font-medium mb-1">
        <span>Event Type</span>
        <span>Date Range</span>
        <span>Search</span>
      </div>

      {/* Filter Inputs */}
      <div className="grid grid-cols-3 gap-4">
        {/* Event Type Dropdown */}
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full bg-zinc-800 text-sm text-white rounded px-3 py-2 border border-zinc-700">
              All events
              <ChevronDown size={15} className="ml-2 text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-800 text-white border border-zinc-700">
              <DropdownMenuItem>All Events</DropdownMenuItem>
              <DropdownMenuItem>Booking Created</DropdownMenuItem>
              <DropdownMenuItem>Booking Cancelled</DropdownMenuItem>
              <DropdownMenuItem>Booking Rescheduled</DropdownMenuItem>
              <DropdownMenuItem>User Updated</DropdownMenuItem>
              <DropdownMenuItem>Team Member Added</DropdownMenuItem>
              <DropdownMenuItem>Event Type Created</DropdownMenuItem>
              <DropdownMenuItem>Integration Connected</DropdownMenuItem>
              <DropdownMenuItem>Webhook Configured</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Date Range Dropdown */}
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full bg-zinc-800 text-sm text-white rounded px-3 py-2 border border-zinc-700">
              Last 7 days
              <ChevronDown size={15} className="ml-2 text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-800 text-white border border-zinc-700">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>Custom Range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search by name or email..."
            className="w-full bg-zinc-800 text-white text-sm px-3 py-2 rounded border border-zinc-700 placeholder:text-zinc-400"
          />
          <Search
            size={16}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-zinc-400"
          />
        </div>
      </div>
    </div>
  );
}
