import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(products)

  return (
    <div>
      <h1 className="text-left text-xl my-3 ml-5  text-teal-600 font-bold uppercase">
        All Products Information
      </h1>

      <div className="overflow-x-auto px-5 pb-10">
        <table className="table">
          {/* head */}
          <thead className="bg-pink-100 text-lg text-black">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
              <th>Capacity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="bg-amber-50">
            {
                products.map(product => <tr key={product.id} product={product}>
                    <th>{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.data?.color ? product.data.color : "Not Available"}</td>
                    <td>{product.data?.capacity ? product.data.capacity : "Not Available"}</td>
                    <td> $ {product.data?.price ?  product.data.price : "Not Available"}</td>
                  </tr> )
            }
                       
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
