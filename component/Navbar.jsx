"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Phero
        </Link>

        {/* Navigation */}
        <div className="flex gap-6">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link href="/items" className={linkStyle("/items")}>
            Items
          </Link>

          <Link href="/login" className={linkStyle("/login")}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
