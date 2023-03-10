import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
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
			<div className="container-fluid productlist">
				<div className="container p-0">
					<div className="row">
						{/* <div className="col"> */}
						<div className="my-5 p-0 d-flex justify-content-between align-items-center">
							<h1 className="page-title">ADDRESS BOOK</h1>

							<Link to="/">
								<button className="sf-button mb-5 ">LOGOUT</button>
							</Link>
						</div>
						<div className="d-flex justify-content-center">
							<Link to="/addproduct">
								<button className="sf-button mb-5 ">ADD DETAILS</button>
							</Link>
						</div>

						<div className="table-responsive">
							<table className="table mb-5">
								<thead>
									<tr className="table-head">
										<th>NAME</th>
										<th>GENDER</th>
										<th>MOBILE</th>
										<th>E-MAIL</th>
										<th>ADDRESS</th>
										<th>PIN CODE</th>
										<th>EDIT</th>
										<th>DELETE</th>
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
												<td>
													<Link to={`/updateproduct/${product._id}`}>
														<AiFillEdit className="edit-icon" />
													</Link>
												</td>
												<td onClick={() => handleDelete(product._id)}>
													<MdDeleteForever className="edit-icon" />
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
						{/* </div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductList;
