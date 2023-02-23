import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (productID) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/products/${productID}`);
      if (response) {
        getProducts();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="row">
            <h1 className="">PRODUCTS LIST</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {products.length &&
                  products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.image}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <Link className="btn btn-link" to={`/updateproduct/${product._id}`}>
                        Edit
                      </Link>
                      <button className="btn btn-link" onClick={() => handleDelete(product._id)}>
                        Delete
                      </button>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
