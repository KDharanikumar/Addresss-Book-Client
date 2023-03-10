import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
	const params = useParams();
	const navigate = useNavigate();
	const prodID = params.prodID.toString();
	const [productDetails, setProductDetails] = useState({
		name: "",
		gender: "",
		mobile: "",
		email: "",
		address: "",
		pincode: "",
	});

	const upDet = async () => {
		const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${prodID}`);
		setProductDetails(res.data);
	};

	useEffect(() => {
		upDet();
	}, []);

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
		<section>
			<div className="container-fluid updateproduct">
				<div className="container p-0 d-flex justify-content-center align-items-center">
					<div className="row">
						<form onSubmit={handleSubmit}>
							<h1 className="page-title my-5 text-center">UPDATE DETAILS</h1>
							<input
								type="Text"
								className="form-control mb-4"
								id="exampleInputText"
								value={productDetails.name}
								onChange={(e) => handleinput({ name: e.target.value })}
							/>

							<select
								id="Select"
								className="form-select mb-4"
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
								id="exampleInputText"
								value={productDetails.mobile}
								onChange={(e) => handleinput({ mobile: e.target.value })}
							/>
							<input
								type="email"
								className="form-control mb-4"
								id="email"
								value={productDetails.email}
								onChange={(e) => handleinput({ email: e.target.value })}
							/>
							<input
								type="Text"
								className="form-control mb-4"
								id="exampleInputText"
								value={productDetails.address}
								onChange={(e) => handleinput({ address: e.target.value })}
							/>
							<input
								type="Number"
								className="form-control mb-5"
								id="exampleInputText"
								value={productDetails.pincode}
								onChange={(e) => handleinput({ pincode: e.target.value })}
							/>
							<button type="submit" className="sf-button w-100">
								UPDATE
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UpdateProduct;
