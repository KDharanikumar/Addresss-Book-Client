import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
	let navigate = useNavigate();
	let formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmpassword: "",
		},
		validate: (values) => {
			const errors = {};
			if (!values.name) {
				errors.name = " Name is Required";
			}
			if (!values.email) {
				errors.email = "Email is Required";
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = "Invalid Email Address";
			}
			if (!values.password) {
				errors.password = "Password is Required";
			}
			if (!values.confirmpassword) {
				errors.confirmpassword = "Confirm Password is Required";
			}
			return errors;
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post("https://addresss-book-server.onrender.com/users/signup", {
					...values,
				});
				if (response.data) {
					localStorage.setItem("token", response.data);
					Swal.fire({
						title: "User Created Successfully",
						icon: "success",
						confirmButtonText: "okay",
					});
					navigate("/");
				}
			} catch (error) {
				console.log(error);
				Swal.fire({
					title: "Already Exist User or Worng Dtails Please Check",
					icon: "error",
					confirmButtonText: "okay",
				});
			}
		},
	});
	return (
		<section className="Home banner-signup bg-danger d-flex justify-content-center text-align-center">
			<div className="container-fluid banner-layer m-auto d-flex justify-content-center align-items-center">
				<div className="row">
					<div className="col">
						<div className="card signup-card text-center p-3">
							<div className="card-body">
								<h2 className="mb-5">SIGN UP</h2>
								<form onSubmit={formik.handleSubmit}>
									<span style={{ color: "#ff014f" }}>{formik.touched.name && formik.errors.name}</span>
									<input
										type="text"
										className="form-control mb-3"
										name="name"
										placeholder="Name"
										onChange={formik.handleChange}
										value={formik.values.name}
									/>
									<br />
									<span style={{ color: "#ff014f" }}>{formik.touched.email && formik.errors.email}</span>
									<input
										type="email"
										className="form-control mb-3"
										name="email"
										placeholder="Email"
										onChange={formik.handleChange}
										value={formik.values.email}
									/>
									<br />
									<span style={{ color: "#ff014f" }}>{formik.touched.password && formik.errors.password}</span>
									<input
										type="password"
										className="form-control mb-3"
										name="password"
										placeholder="Password"
										onChange={formik.handleChange}
										value={formik.values.password}
									/>
									<br />
									<span style={{ color: "#ff014f" }}>
										{formik.touched.confirmpassword && formik.errors.confirmpassword}
									</span>
									<input
										type="password"
										className="form-control mb-5"
										name="confirmpassword"
										placeholder="Confirm Password"
										onChange={formik.handleChange}
										value={formik.values.confirmpassword}
									/>

									<button type="submit" className="sf-button mb-3 w-100" value={"Create Account"}>
										SignUp
									</button>

									<div>
										<span className="fw-bolder text-black">Already Have an Account?</span>
										<span>
											<Link to="/" className="signup-link mx-2 fs-6 fw-bold">
												SignIn
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

export default SignUp;
