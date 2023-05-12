import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CardsOnHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        const data = response.data;
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
        >
          <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <Link to="product" className="relative block overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
                39% OFF
              </span>
            </Link>
            <div className="p-4">
              <Link
                to="#"
                className="text-xl font-semibold text-black whitespace-nowrap overflow-hidden"
              >
                {product.title}
              </Link>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-3xl font-bold text-black">
                  ${product.price}
                </p>
                <p className="text-sm text-black">{product.category}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
