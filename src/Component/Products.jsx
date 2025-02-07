import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImMobile } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(products);

  return (
    <div>
      <h1 className="text-xl my-3 ml-5  text-teal-600 font-bold uppercase">
        All Products Information
      </h1>

      {/* adding new product option  */}
      <div className="flex justify-start ml-5">
        <Link
          to="/add-products"
          className="bg-purple-700 text-xl px-5 py-2 text-white font-bold rounded-md flex items-center gap-3"
        >
          Add New Products <ImMobile />
        </Link>
      </div>

      {/* displaying all products with relevant information  */}
      <div className="overflow-x-auto px-5 pb-10 mt-5">
        <table className="table">
          {/* head */}
          <thead className="bg-pink-100 text-lg text-black text-center">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
              <th>Capacity</th>
              <th>Price</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody className="bg-amber-50">
            {products.map((product) => (
              <tr key={product.id} product={product}>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>
                  {product.data?.color ? product.data.color : "Not Available"}
                </td>
                <td>
                  {product.data?.capacity
                    ? product.data.capacity
                    : "Not Available"}
                </td>
                <td>
                  {" "}
                  $ {product.data?.price ? product.data.price : "Not Available"}
                </td>
                <td className="text-red-700 text-center text-lg">
                  <Link to={`/products/${product.id}`} className="bg-amber-100 px-2 py-1 text-sm font-bold rounded">View</Link>
                </td>
                <td className="text-red-700 text-center text-lg">
                  <button><MdDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
