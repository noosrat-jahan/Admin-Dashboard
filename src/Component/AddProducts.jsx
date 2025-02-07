import React from "react";
import Swal from "sweetalert2";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const color = form.color.value;
    const capacity = form.capacity.value;
    const price = form.price.value;
    const productInfo = {
      name,
      data: { color, capacity, price },
    };
    console.log(productInfo);

    fetch("https://api.restful-api.dev/objects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added a new Product successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/products");
        }
      });
  };

  return (
    <div className="w-5/6 mx-auto bg-gray-50 p-7 my-10">
      <h3 className="text-left mb-3 text-blue-600">
        Please fill out the form with necessary information....
      </h3>

      <form className="space-y-3" onSubmit={handleAddProduct}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Product Name*</span>
          </div>
          <input
            name="name"
            type="text"
            placeholder="product name"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Product Color*</span>
          </div>
          <input
            name="color"
            type="text"
            placeholder="product color"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Product Capacity*</span>
          </div>
          <input
            name="capacity"
            type="text"
            placeholder="product capacity"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Product Price*</span>
          </div>
          <input
            name="price"
            type="text"
            placeholder="product price"
            className="input input-bordered w-full "
          />
        </label>

        {/* submit form button  */}
        <button
          type="submit"
          className="flex gap-3 mx-auto w-full justify-center bg-gradient-to-r from-[#44b489] to-[#26813b] text-white font-semibold text-lg py-2.5 px-3 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
