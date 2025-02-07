import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImMobile } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://api.restful-api.dev/objects/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");

            const storeProductId = localStorage.getItem("productId");
            if (storeProductId === id) {
              localStorage.removeItem("productId");
              setSingleProduct({});
            }

            setProduct((prev) => prev.filter((product) => product.id !== id));
          });
      }
    });
  };

  const fetchSingleProducts = (id) => {
    fetch(`https://api.restful-api.dev/objects/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((error) => console.error("Error fetching single product:", error));
  };

  useEffect(() => {
    const storeProductId = localStorage.getItem("productId");
    if (storeProductId) {
      fetchSingleProducts(storeProductId);
    }
  }, []);

  const handleSort = () => {
    setProduct((prev) =>
      [...prev].sort((a, b) => (b.data?.price || 0) - (a.data?.price || 0))
    );
  };

  if (!products.length) {
    return <span>Loading.....</span>;
  }

  return (
    <div>
      <h1 className="text-xl my-3 ml-5 text-teal-600 font-bold uppercase">
        All Products Information
      </h1>

      {/* Adding new product option */}
      <div className="flex justify-between">
        <div className="ml-5">
          <Link
            to="/add-products"
            className="bg-purple-700 text-xl px-5 py-2 text-white font-bold rounded-md flex items-center gap-3"
          >
            Add New Products <ImMobile />
          </Link>
        </div>

        <div className="mr-5">
          <button
            onClick={handleSort}
            className="bg-purple-700 text-xl px-5 py-2 text-white font-bold rounded-md"
          >
            Sort By Price
          </button>
        </div>
      </div>

      {/* Displaying all products */}
      <div className="overflow-x-auto px-5 pb-10 mt-5">
        <table className="table">
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
              <tr key={product.id}>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>{product.data?.color || "Not Available"}</td>
                <td>{product.data?.capacity || "Not Available"}</td>
                <td>$ {product.data?.price || "Not Available"}</td>
                <td className="text-center">
                  <Link
                    to={`/products/${product.id}`}
                    className="bg-amber-100 px-2 py-1 text-sm font-bold rounded"
                  >
                    View
                  </Link>
                </td>
                <td className="text-center">
                  <button onClick={() => handleDelete(product.id)}>
                    <MdDelete className="text-red-700 text-lg" />
                  </button>
                </td>
              </tr>
            ))}

            {singleProduct && Object.keys(singleProduct).length > 0 && (
              <tr key={singleProduct.id}>
                <th>{14}</th>
                <td>{singleProduct.name}</td>
                <td>{singleProduct.data?.color || "Not Available"}</td>
                <td>{singleProduct.data?.capacity || "Not Available"}</td>
                <td>$ {singleProduct.data?.price || "Not Available"}</td>
                <td className="text-center">
                  <Link
                    to={`/products/${singleProduct.id}`}
                    className="bg-amber-100 px-2 py-1 text-sm font-bold rounded"
                  >
                    View
                  </Link>
                </td>
                <td className="text-center">
                  <button onClick={() => handleDelete(singleProduct.id)}>
                    <MdDelete className="text-red-700 text-lg" />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
