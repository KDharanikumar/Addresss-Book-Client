import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
	const navigate = useNavigate();
	const [productDetails, setProductDetails] = useState({
		name: "",
		gender: "",
		mobile: "",
		email: "",
		address: "",
		pincode: "",
	});

	const handleinput = (value) => {
		setProductDetails((product) => {
			return { ...product, ...value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const product = { ...productDetails };

		try {
			const responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/products`, product);
			if (responce) {
				setProductDetails({
					name: "",
					gender: "",
					mobile: "",
					email: "",
					address: "",
					pincode: "",
				});
				navigate("/productlist");
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};
	return (
		<section className="addproduct">
			<div className="container-fluid addproduct d-flex justify-content-center align-items-center">
				<div className="container p-0  d-flex justify-content-center align-items-center">
					<div className="row">
						<form onSubmit={handleSubmit}>
							<h1 className="page-title my-5 text-center">ADD DETAILS</h1>

							<input
								type="Text"
								className="form-control mb-4"
								id="exampleInputText"
								placeholder="Name"
								value={productDetails.name}
								onChange={(e) => handleinput({ name: e.target.value })}
							/>

							<select
								for="gender"
								id="Select"
								className="form-select mb-4 border-0"
								value={productDetails.gender}
								onChange={(e) => handleinput({ gender: e.target.value })}
							>
								<option>Gender</option>
								<option>Male</option>
								<option>Female</option>
							</select>

							<input
								type="Number"
								className="form-control mb-4"
								id="number"
								placeholder="Mobile Number"
								value={productDetails.mobile}
								onChange={(e) => handleinput({ mobile: e.target.value })}
							/>

							<input
								type="email"
								className="form-control mb-4"
								id="email"
								placeholder="E-Mail"
								value={productDetails.email}
								onChange={(e) => handleinput({ email: e.target.value })}
							/>

							<input
								type="Text"
								className="form-control mb-4"
								id="text"
								placeholder="Address"
								value={productDetails.address}
								onChange={(e) => handleinput({ address: e.target.value })}
							/>

							<input
								type="Number"
								className="form-control mb-5"
								id="number"
								placeholder="Pin Code"
								value={productDetails.pincode}
								onChange={(e) => handleinput({ pincode: e.target.value })}
							/>

							<button type="submit" className="sf-button w-100" value="Add an Product">
								ADD DETAILS NOW
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddProduct;
