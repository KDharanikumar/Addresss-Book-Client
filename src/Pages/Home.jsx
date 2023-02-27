// import { Link } from "react-router-dom";
import SignIn from "../Pages/SignIn";

const Home = () => {
	return (
		<section className="Home banner">
			<div className="container-fluid banner-layer">
				<div className="row">
					<div className="col">
						<h1 className="home-title d-flex justify-content-center align-items-center mb-5">Welcome To The FMCG</h1>
						<div className="d-flex justify-content-center align-items-center">
							<SignIn />
							{/* <button className="sf-button me-5">
								<Link to="/signin" style={{ textDecoration: "none" }}>
									<span className="text-black">SignIn</span>
								</Link>
							</button> */}
							{/* <button className="sf-button me-5">
								<Link to="/signup" style={{ textDecoration: "none" }}>
									<span className="text-black">SignUp</span>
								</Link>
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
