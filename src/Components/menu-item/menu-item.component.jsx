import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import "./menu-item.style.scss";
export default function MenuItem({ title, imageUrl, linkUrl, size }) {
  const history = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => {history(`${linkUrl}`)}}>
      <div
        className="menu-item-backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}
