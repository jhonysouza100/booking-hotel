import React from "react";
import Link from "next/link";
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

export default function Navigation() {
  return (
    <>
      {/* HEADER */}
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-lg-3 py-lg-2 shadow-sm sticky-top">
        <Link className="navbar-brand me-5 fw-bold fs-3 h-font" href="/">
          JHotel
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link me-2" href="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" href="/rooms">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" href="/facilities">
                Facilities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" href="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" href="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-outline-dark shadow-none me-lg-3 m-2"
              data-toggle="modal"
              data-target="#loginModal"
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-dark shadow-none"
              data-toggle="modal"
              data-target="#registerModal"
            >
              Register
            </button>
          </form>
        </div>
      </nav>


      {/* MODAL */}
      {/* LOGIN MODAL */}
      <div
        className="modal fade"
        id="loginModal"
        data-backdrop="static"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {/* FORM */}
            <form>
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-person-circle fs-3 m-2" /> User Login
                </h5>
                <button
                  type="reset"
                  className="close shadow-none"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control shadow-none" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control shadow-none" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <button type="submit" className="btn btn-dark shadow-none">
                    LOGIN
                  </button>
                  <a
                    href="javascript: void(0)"
                    className="text-secondary text-decoration-none"
                  >
                    Forgot Password
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* REGISTER MODAL */}
      <div
        className="modal fade"
        id="registerModal"
        data-backdrop="static"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            {/* FORM */}
            <form>
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-person-lines-fill fs-3 m-2" /> User
                  Registration
                </h5>
                <button
                  type="reset"
                  className="close shadow-none"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <span className="badges rounded-pill bg-light text-dark mb-3 text-wrap lh-base">
                  Note: Your details must match with your ID (Aadhaar card,
                  passport, driving license, ect.) that will be required during
                  check-in.
                </span>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control shadow-none" />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control shadow-none"
                      />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="number"
                        className="form-control shadow-none"
                      />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Picture</label>
                      {/* <input type="file" class="form-control shadow-none"> */}
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                          Choose File
                        </span>
                        <input
                          type="file"
                          className="form-control shadow-none"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 ps-0 mb-3">
                      <label className="form-label">Address</label>
                      <textarea
                        className="form-control shadow-none"
                        rows={1}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Pincode</label>
                      <input
                        type="number"
                        className="form-control shadow-none"
                      />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input type="date" className="form-control shadow-none" />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control shadow-none"
                      />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control shadow-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center my-1">
                  <button type="submit" className="btn btn-dark shadow-none">
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
