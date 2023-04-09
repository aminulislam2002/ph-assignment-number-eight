import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);
  const [cart, setCart] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  useEffect(() => {
    fetch("fakeData/data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const handleAddToCart = (blog) => {
    const newCart = [...cart, blog];
    setCart(newCart);
  };

  const bookMarks = (blog) => {
    // const newCart = [...bookMark, blog];
    const exist = bookMark.find((b) => b.id == blog.id);
    if (exist) {
      toast.error("Already have Bookmarked", { theme: "colored" });
    } else {
      toast.success("Added as Bookmark", { theme: "colored" });
      setBookMark([...bookMark, blog]);
    }
  };

  return (
    <div className="blogs-container">
      <div className="blog-container">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleAddToCart={handleAddToCart} bookMark={bookMarks}></Blog>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} bookMark={bookMark}></Cart>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Blogs;
