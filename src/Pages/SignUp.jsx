import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section>
      <div className="container fl-signup my-5">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div class="card fl-signup-card text-center p-4">
              <h1 className="mb-3">Sign Up</h1>
              <div class="card-body">
                <form>
                  <label className="form-label ">Full Name</label>
                  <input type="Text" className="form-control mb-3" id="exampleInputText" />

                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control mb-3" id="exampleInputNumber" />

                  <label className="form-label">E-Mail</label>
                  <input type="email" className="form-control mb-3" id="exampleInputEmail1" />

                  <label className="form-label">Password</label>
                  <input type="password" className="form-control mb-3" id="exampleInputPassword1" />

                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control mb-4" id="exampleInputPassword1" />
                </form>
                <button type="submit" className="sf-button mb-4">
                  Sign Up
                </button>
                <div>
                  Already have an account?
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <span className="fs-6"> Sign In</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
