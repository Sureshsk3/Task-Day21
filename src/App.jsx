import React, { useState } from "react";
import Nav from "./assets/components/Nav";
import Heater from "./assets/components/Heater";
import Body from "./assets/components/Body";
import Footer from "./assets/components/Footer";

function App() {
  let [cart, cartFn] = useState(0);
  const dataAll = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.51,
      stock: 68,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
    },
  ];
  return (
    <>
      <Nav cart={cart} />
      {/* <Heater /> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {dataAll.map((e, i) => {
              return <Body cartFn={cartFn} cart={cart} dataAll={e} key={i} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
