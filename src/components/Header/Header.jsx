import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h3>Knowledge Cafe Blogs</h3>
      <a href="/home">Home</a>
      <a href="/shop">Programming</a>
      <a href="/order">Blog</a>
      <a href="/login">Login</a>
      <a href="/login">Profile</a>
    </nav>
  );
};

export default Header;
