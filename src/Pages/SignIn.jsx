// import axios from "axios";
// import { useNavigate, useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
// 	const navigate = useNavigate;
// 	const [formData, setFormData] = useState({
// 		email: "",
// 		password: "",
// 	});

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const response = await axios.get.post("process.env.REACT_APP_BASE_URL/users/signin", { ...formData });
// 		console.log(response);
// 	};

// 	return (
// 		<section>
// 			<div className="container fl-signin my-5">
// 				<div className="row">
// 					<div className="col d-flex justify-content-center">
// 						<div className="card fl-signin-card text-center p-4">
// 							<h1 className="mb-3">Sign In</h1>
// 							<div className="card-body">
// 								<form className="fl-signin-form" onSubmit={handleSubmit}>
// 									<label className="form-label">E-Mail</label>
// 									<input
// 										type="email"
// 										// name="email"
// 										className="form-control mb-3"
// 										id="exampleInputEmail1"
// 										value={formData.email}
// 										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// 									/>
// 									<label className="form-label">Password</label>
// 									<input
// 										type="password"
// 										// name="password"
// 										className="form-control mb-3"
// 										id="exampleInputPassword1"
// 										value={formData.password}
// 										onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// 									/>
// 								</form>
// 								{/* <div className="text-end mb-4">
//                   <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
//                     <span className="text-black">Forgot Password?</span>
//                   </Link>
//                 </div> */}

// 								<button type="submit" className="sf-button mb-4">
// 									{/* <Link to="/productlist" style={{ textDecoration: "none" }}> */}
// 									Sign In
// 									{/* </Link> */}
// 								</button>

// 								<div>
// 									<p>
// 										Don't Have an Account?
// 										<Link to="/signup" style={{ textDecoration: "none" }}>
// 											<span className="text-black fs-6"> SignUp</span>
// 										</Link>
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default SignIn;

import axios from "axios";
import { useFormik } from "formik";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
	const navigate = useNavigate();

	let formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate: (values) => {
			const errors = {};
			if (!values.email) {
				errors.email = "Email is Required";
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = "Invalid email address";
			}
			if (!values.password) {
				errors.password = "Password is Required";
			}
			return errors;
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post("https://e-commerce-fmcg-server.onrender.com/users/signin", { ...values });
				//   console.log(response)
				if (response) {
					localStorage.setItem("token", response.data);

					const Token = localStorage.getItem("token");
					console.log(Token);
					Token ? navigate("/productlist") : navigate("/");
				}
			} catch (error) {
				console.log(error.response.data.meg);
				Swal.fire({
					title: "Wrong Details",
					icon: "error",
					confirmButtonText: "okay",
				});
			}
		},
	});

	return (
		<section>
			<div className="container py-5">
				<div className="row">
					<div className="col-md">
						<div className="card .fl-signin-card text-center  mx-auto">
							<div className="card-body">
								<div className="user-pic mx-auto my-3 d-flex justify-content-center align-items-center text-white fs-1">
									<BiUserCircle />
								</div>
								<h2>Sign In</h2>
								<form onSubmit={formik.handleSubmit}>
									<div className="my-4">
										<span style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</span>
										<input
											type="email"
											class="form-control"
											name="email"
											placeholder="Email"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
										<br />
										<span style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</span>
										<input
											type="password"
											class="form-control"
											name="password"
											placeholder="Password"
											onChange={formik.handleChange}
											value={formik.values.password}
										/>
									</div>
									<div class="d-grid gap-4 mb-3">
										<div class="d-grid gap-4 mb-3">
											<input type="submit" class="form-control btn btn-warning" value={"Login"} />
										</div>
										{/* <button class="btn btn-primary" type="submit" >
										<Link to="/forgetpassword">Forgot Password?</Link>
									</button> */}
									</div>
									<div>
										Don’t have an account?
										<span className="text-primary fs-6 mx-2 ">
											<Link to="/signup" className="text-primary">
												Sign up
											</Link>
										</span>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
