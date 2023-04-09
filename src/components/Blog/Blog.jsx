import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

const Blog = (props) => {
  const { name, title, time, date, profile, cover, tag } = props.blog;

  const handleAddToCart = props.handleAddToCart;

  const bookMark = props.bookMark;

  return (
    <div className="blog-container">
      <div className="cover">
        <img src={cover} alt="" />
      </div>
      <div className="profile-info">
        <div className="profile">
          <img src={profile} alt="" />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{date}</p>
        </div>
        <div className="time-zone">
          <div>{time} min read</div>
          <button onClick={() => bookMark(props.blog)}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <div>
        <h1>{title}</h1>
        <p className="tag">
          {tag[0]} {tag[1]}
        </p>
        <button onClick={() => handleAddToCart(props.blog)}>Mark as read</button>
      </div>
    </div>
  );
};

export default Blog;
