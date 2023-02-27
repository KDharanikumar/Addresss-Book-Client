import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AddProduct from "./AddProduct";

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
						{/* <AddProduct /> */}
						<table>
							<thead>
								<tr>
									<th>NAME</th>
									<th>GENDER</th>
									<th>MOBILE</th>
									<th>E-MAIL</th>
									<th>ADDRESS</th>
									<th>PIN CODE</th>
								</tr>
							</thead>
							<tbody>
								{products.length &&
									products.map((product, index) => (
										<tr key={index}>
											<td>{product.name}</td>
											<td>{product.gender}</td>
											<td>{product.mobile}</td>
											<td>{product.email}</td>
											<td>{product.address}</td>
											<td>{product.pincode}</td>
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
