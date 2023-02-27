import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
	const navigate = useNavigate();
	const [productDetails, setProductDetails] = useState({
		name: "",
		price: "",
		category: "",
		image: "",
		description: "",
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
					price: "",
					category: "",
					image: "",
					description: "",
				});
				navigate("/productlist");
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};
	return (
		<div className="container">
			<div className="row d-flex">
				<div className="col">
					<form className="fl-contact-form" onSubmit={handleSubmit}>
						<h3>
							<u>Add Product</u>
						</h3>
						<label className="form-label">PRODUCT NAME</label>
						<input
							type="Text"
							className="form-control mb-3"
							id="exampleInputText"
							value={productDetails.name}
							onChange={(e) => handleinput({ name: e.target.value })}
						/>
						<label className="form-label">PRICE</label>
						<input
							type="Number"
							className="form-control mb-3"
							id="exampleInputText"
							value={productDetails.price}
							onChange={(e) => handleinput({ price: e.target.value })}
						/>
						<div className="mb-3">
							<label for="Select" className="form-label">
								Categeory
							</label>
							<select id="Select" className="form-select" value={productDetails.category} onChange={(e) => handleinput({ category: e.target.value })}>
								<option>Select</option>
								<option>Vegetables</option>
								<option>Fruits</option>
								<option>Drinks</option>
								<option>Snacks</option>
								<option>Foods</option>
							</select>
						</div>
						<label className="form-label">IMAGE</label>

						<input
							type="file"
							className="form-control mb-3"
							id="file"
							value={productDetails.image}
							onChange={(e) => handleinput({ image: e.target.value })}
						/>
						<div>
							<label for="floatingTextarea">DESCRIPTION</label>
							<textarea
								type="Text"
								className="form-control"
								id="floatingTextarea"
								value={productDetails.description}
								onChange={(e) => handleinput({ description: e.target.value })}
							/>
						</div>
						<button type="submit" className="sf-button" value="Add an Product">
							ADD PRODUCT NOW
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
