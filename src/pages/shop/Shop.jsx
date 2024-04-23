import React from "react";
import "./Shop.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Shop = () => {
  const shopFilterArray = [
    { id: 1, name: "Watches" },
    { id: 2, name: "Tv & Home" },
    { id: 3, name: "Ipads" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Laptops" },
    { id: 6, name: "Phones" },
  ];
  const shopFilterArrayRadio = [
    { id: 1, name: "Latest" },
    { id: 2, name: "Oldest" },
  ];
  return (
    <>
      <Header />
      <div className="shop">
        <div className="shop__filter">
          <h2>Product Categories</h2>
          <div className="shop__filter__check">
            {shopFilterArray.map((item) => (
              <div key={item.id} className="shop__filter__check__item">
                <input type="checkbox" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="shop__filter__sort">
            <h3>Sort By</h3>
            <div className="shop__filter__sort__item">
              {shopFilterArrayRadio.map((item) => (
                <div key={item.id} className="shop__filter__sort__item_radio">
                  <input type="radio" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="shop__item">
          <h2>Showing 1-9 of 15 Products</h2>
          <div className="shop__item__container">
            <div className="shop__item__card">
              <div className="shop__item__card__imgConatiner">
                <img
                  src="./admin ui/products/apple-iphone-15-pro-1tb-blue-titanium.png"
                  alt=""
                />
              </div>
              <div className="shop__item__card__textConatiner">
                <h4>Apple iphone 15 pro Max (1TB)</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  rem perferendis blanditiis labore, accusantium officiis
                  voluptatem ea quis fugit. Tenetur.
                </p>
                <span>$ 999</span>
              </div>
            </div>
            <div className="shop__item__card">
              <div className="shop__item__card__imgConatiner">
                <img
                  src="./admin ui/products/apple-iphone-15-pro-1tb-blue-titanium.png"
                  alt=""
                />
              </div>
              <div className="shop__item__card__textConatiner">
                <h4>Apple iphone 15 pro Max (1TB)</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  rem perferendis blanditiis labore, accusantium officiis
                  voluptatem ea quis fugit. Tenetur.
                </p>
                <span>$ 999</span>
              </div>
            </div>
            <div className="shop__item__card">
              <div className="shop__item__card__imgConatiner">
                <img
                  src="./admin ui/products/apple-iphone-15-pro-1tb-blue-titanium.png"
                  alt=""
                />
              </div>
              <div className="shop__item__card__textConatiner">
                <h4>Apple iphone 15 pro Max (1TB)</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  rem perferendis blanditiis labore, accusantium officiis
                  voluptatem ea quis fugit. Tenetur.
                </p>
                <span>$ 999</span>
              </div>
            </div>
            <div className="shop__item__card">
              <div className="shop__item__card__imgConatiner">
                <img
                  src="./admin ui/products/apple-iphone-15-pro-1tb-blue-titanium.png"
                  alt=""
                />
              </div>
              <div className="shop__item__card__textConatiner">
                <h4>Apple iphone 15 pro Max (1TB)</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  rem perferendis blanditiis labore, accusantium officiis
                  voluptatem ea quis fugit. Tenetur.
                </p>
                <span>$ 999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
