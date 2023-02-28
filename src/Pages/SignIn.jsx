import axios from "axios";
import { useFormik } from "formik";
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
				errors.email = "Invalid Email Address";
			}
			if (!values.password) {
				errors.password = "Password is Required";
			}
			return errors;
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post("https://addresss-book-server.onrender.com/users/signin", { ...values });
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
			<div className="container m-auto">
				<div className="row">
					<div className="col">
						<div className="card signin-card text-center p-3">
							<div className="card-body">
								<h2 className="mb-5">SIGN IN</h2>

								<form onSubmit={formik.handleSubmit}>
									<span style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</span>
									<input
										type="email"
										className="form-control mb-4"
										name="email"
										placeholder="Email"
										onChange={formik.handleChange}
										value={formik.values.email}
									/>
									<span style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</span>
									<input
										type="password"
										className="form-control mb-5"
										name="password"
										placeholder="Password"
										onChange={formik.handleChange}
										value={formik.values.password}
									/>

									<button type="submit" className="sf-button mb-3" value={"Login"}>
										SignIn
									</button>
									<div>
										<span className="fw-bolder text-black">Don’t Have an Account?</span>
										<span>
											<Link to="/signup" className="signup-link mx-2 fs-6 fw-bold">
												SignUp
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
