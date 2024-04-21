import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const catData = [
  {
    id: 1,
    name: "accessories",
    img: "./admin ui/categories/accessories-category.png",
  },
  { id: 2, name: "ipads", img: "./admin ui/categories/ipads-category.png" },
  { id: 3, name: "laptops", img: "./admin ui/categories/laptops-category.png" },
  { id: 4, name: "phones", img: "./admin ui/categories/phones-category.png" },
  { id: 5, name: "tv", img: "./admin ui/categories/tv-home-category.png" },
  { id: 6, name: "watches", img: "./admin ui/categories/watches-category.png" },
];
const Category = () => {
  return (
    <div className="caetgory">
      <div className="category__top">
        <p>shop by category</p>
        <Link to="/"> 
        show all
        </Link>
      </div>
      <div className="category__item">
        {catData.map((cat) => (
          <div className="category__box">
            <img src={cat.img} alt="" />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
