import { LogOut, Search, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userAuthStore } from "../src/store/authUser";
import { useContentStore } from "../src/store/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = userAuthStore();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const { setContentType } = useContentStore();

  return (
    <header className="max-w-6xl mx-auto flex-wrap items-center flex justify-between p-4 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img src="/netflix-logo.png" alt="logo" className="w-32 sm:w-40" />
        </Link>
        {/* desktop navbar item */}
        <div className="hidden sm:flex gap-2 items-center">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("TV")}
          >
            Tv Shows
          </Link>
        </div>
      </div>

      <div className="flex gap-2 items-center z-50">
        <Link to="/search">
          <Search className="size=6 cursor-pointer" />
        </Link>
        <img
          src={user.image}
          alt="Avatar"
          className=" h-8 rounded cursor-pointer"
        />
        <LogOut className="size-6 cursor-pointer" onClick={logout} />
        <div className="sm:hidden">
          <Menu
            className="size-6 cursor-pointer"
            onClick={toggleMobileMenu}
          ></Menu>
        </div>
      </div>

      {/* mobile navbar item */}
      {isMobileMenuOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Tv Show
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
