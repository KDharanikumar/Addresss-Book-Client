import SignIn from "../Pages/SignIn";

const Home = () => {
	return (
		<section className="Home banner bg-danger d-flex justify-content-center text-align-center">
			<div className="container-fluid banner-layer m-auto">
				<div className="row">
					<div className="col">
						<h1 className="home-title d-flex justify-content-center align-items-center mb-5">ADDRESS BOOK</h1>
						<div className="d-flex justify-content-center align-items-center">
							<SignIn />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
