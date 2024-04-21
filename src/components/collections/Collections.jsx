import React, { useState } from "react";
import "./Collections.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const collectionData = [
  {
    id: 1,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499.0,
  },
  {
    id: 2,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499.0,
  },
  {
    id: 3,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
  {
    id: 4,
    title: "apple watch series 9 aluminum3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "airpods-max.png",
    price: 499,
  },
  {
    id: 5,
    title: "apple watch series 9 aluminum4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
  {
    id: 6,
    title: "apple watch series 9 aluminum5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
  {
    id: 7,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "airpods-max.png",
    price: 499,
  },
  {
    id: 8,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499.0,
  },
  {
    id: 9,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499.0,
  },
  {
    id: 10,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
  {
    id: 11,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
  {
    id: 12,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "airpods-max.png",
    price: 499,
  },
  {
    id: 13,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
  {
    id: 14,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
  {
    id: 15,
    title: "apple watch series 9 aluminum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reiciendis.",
    img: "apple-watch-ultra-2.png",
    price: 499,
  },
];
let startIndex = 0;
let endIndex = 3;
const Collections = () => {
  const [showItem, setShowItem] = useState(
    collectionData.slice(startIndex, endIndex)
  );

  let [currentPage, setCurrentPage] = useState(1);

  const paginationHandler = (val) => {
    if (val === "next" && currentPage < 5) {
      startIndex += 3;
      endIndex += 3;
      setCurrentPage((prev) => prev + 1);
    } else if (val === "prev" && currentPage > 1) {
      startIndex -= 3;
      endIndex -= 3;
      setCurrentPage((prev) => prev - 1);
    }
    setShowItem(collectionData.slice(startIndex, endIndex));
  };
  return (
    <div className="collection">
      <div className="collection__title">New Collections</div>
      <div className="collections__item__title">
        Showing {startIndex + 1}-{endIndex} of 15 Products
      </div>
      <div className="collection__item">
        {showItem.map((collection) => (
          <div key={collection.id} className="collection__box">
            <div className="collection__box__img">
              <img src={`./admin ui/products/${collection.img}`} alt="" />
            </div>
            <div className="collection__box__desc">
              <h3>{collection.title}</h3>
              <p>{collection.desc}</p>
              <span>$ {collection.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="collection__pagination">
        <div
          className={`arrow ${currentPage == 1 ? "deactive" : ""}`}
          onClick={() => paginationHandler("prev")}
        >
          <IoIosArrowBack />
        </div>
        <p>Page {currentPage} Of 5</p>
        <div
          className={`arrow ${currentPage == 5 ? "deactive" : ""}`}
          onClick={() => paginationHandler("next")}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Collections;
