import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container-fluid">
			<div className="container">
				<div className="row">
					<nav className="navbar navbar-expand-lg">
						<Link to="/" className="navbar-brand">
							LOGO
						</Link>

						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="productlist" className="nav-link active" aria-current="page">
										PRODUCTS LIST
									</Link>
								</li>
								<li className="nav-item">
									<Link to="addproduct" className="nav-link active" aria-current="page">
										ADD PRODUCTS
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
