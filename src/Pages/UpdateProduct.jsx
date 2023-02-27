import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
	const params = useParams();
	const navigate = useNavigate();
	const prodID = params.prodID.toString();
	const [productDetails, setProductDetails] = useState({
		name: "",
		price: "",
		category: "",
		image: "",
		description: "",
	});

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URL}/products/${prodID}`)
			.then((response) => {
				setProductDetails(response.data);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
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
			const responce = await axios.put(`${process.env.REACT_APP_BASE_URL}/products/${prodID}`, product);
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
							<u>UPDATE PRODUCT</u>
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
								Category
							</label>
							<select
								id="Select"
								className="form-select"
								value={productDetails.category}
								onChange={(e) => handleinput({ category: e.target.value })}
							>
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
							type="Text"
							className="form-control mb-3"
							id="exampleInputText"
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
						<button type="submit" className="sf-button">
							UPDATE PRODUCT
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateProduct;
