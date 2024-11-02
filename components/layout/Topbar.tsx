"use client";

import "@/styles/Topbar.css";

import { UserButton, useAuth } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Topbar = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const topRoutes = [
    { label: "Home", path: "/" },
    { label: "Enroll", path: "/enroll" },
    { label: "Learning", path: "/learning" },
  ];

  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="topbar">
      <Link href="/" className="topbar-logo">
        <Image src="/images/clickvidya_logo_flat_2.png" height={100} width={130} alt="logo" />
      </Link>

      <div className="topbar-routes">
        {topRoutes.map((route) => (
          <Link href={route.path} key={route.path}>
            {route.label}
          </Link>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for courses"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => router.push(`/search?query=${searchInput}`)}>
          Search
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile Menu Icon */}
        <div className="topbar-menu-icon">
          <Sheet>
            <SheetTrigger>
              <Menu className="topbar-menu-icon" />
            </SheetTrigger>
            <SheetContent className="topbar-sheet">
              {topRoutes.map((route) => (
                <Link href={route.path} key={route.path}>
                  {route.label}
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in" className="topbar-signin-btn">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Topbar;
