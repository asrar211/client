import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const GetProducts = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="">
          <h1 className="text-center text-xl font-bold mt-2">All Products List</h1>
          <div className="flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/get-product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-4 w-[13rem] bg-slate-200 p-2 shadow-lg shadow-slate-500">
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="">
                    <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold mt-2">{p.name}</h5>
                    <p className="font-semibold mt-2">${p.price}</p>
                    </div>
                    <p className="text-sm opacity-85">{p.description}</p>
                    <button className="bg-green-700 p-1 mt-2 text-white font-semibold w-full">Buy Now</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetProducts;