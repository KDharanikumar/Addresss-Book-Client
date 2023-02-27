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
				errors.email = "Invalid emial address";
			}
			if (!values.password) {
				errors.password = "password is Required";
			}
			if (!values.confirmpassword) {
				errors.confirmpassword = "password is Required";
			}
			return errors;
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post("https://e-commerce-fmcg-server.onrender.com/users/signup", {
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
					title: "Already exist user or worng details please check",
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
						<div className="card signin-card text-center w-25 mx-auto">
							<div className="card-body">
								<h2>Sign Up</h2>
								<form onSubmit={formik.handleSubmit}>
									<div className="my-4">
										<span style={{ color: "red" }}>{formik.touched.name && formik.errors.name}</span>
										<input
											type="text"
											class="form-control"
											name="name"
											placeholder="Name"
											onChange={formik.handleChange}
											value={formik.values.name}
										/>
										<br />
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
										<br />
										<span style={{ color: "red" }}>
											{formik.touched.confirmpassword && formik.errors.confirmpassword}
										</span>
										<input
											type="password"
											class="form-control"
											name="confirmpassword"
											placeholder="Confirm Password"
											onChange={formik.handleChange}
											value={formik.values.confirmpassword}
										/>
										<br />
									</div>
									<div class="col mt-4">
										<input type="submit" class="form-control btn btn-warning" value={"Create Account"} />
									</div>
									<div>
										Already Have account?
										<span className="text-primary fs-6 mx-2">
											<Link to="/" className="text-primary">
												Signin
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
