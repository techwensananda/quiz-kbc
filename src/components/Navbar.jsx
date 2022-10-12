import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container  mx-auto">
      <div className="flex items-center justify-between">
      <p className="text-9xl">QUIZ KBC</p>
        <ul className="flex gap-4 ">
          <li>
            <Link className="text-2xl" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-2xl" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
