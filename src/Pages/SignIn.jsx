import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section>
      <div className="container fl-signin my-5">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card fl-signin-card text-center p-4">
              <h1 className="mb-3">Sign In</h1>
              <div className="card-body">
                <form className="fl-signin-form">
                  <label className="form-label">E-Mail</label>
                  <input type="email" className="form-control mb-3" id="exampleInputEmail1" />
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control mb-3" id="exampleInputPassword1" />
                </form>
                {/* <div className="text-end mb-4">
                  <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                    <span className="text-black">Forgot Password?</span>
                  </Link>
                </div> */}
                <div>
                  <button type="submit" className="sf-button mb-4">
                    <Link to="/productlist" style={{ textDecoration: "none" }}>
                      Sign In
                    </Link>
                  </button>
                </div>
                <div>
                  <p>
                    Don't Have an Account?
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <span className="text-black fs-6"> SignUp</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
