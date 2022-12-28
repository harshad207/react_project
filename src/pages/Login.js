/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
    checkbox: "",
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="bg">
      <div>
        <section className="pt-5">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={
                    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  }
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow  mb-5 rounded mt-5 bg-light">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="text-center mt-2 fw-bolder fs-5">Login</p>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label"
                      id="font"
                      htmlFor="form3Example3"
                    >
                      Email address
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        },
                      })}
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                    {errors.email?.type === "required" && (
                      <p style={{ color: "red" }} id="font">
                        This field is required
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p style={{ color: "red" }} id="font">
                        Please enter valid email
                      </p>
                    )}
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-3">
                    <label
                      className="form-label"
                      htmlFor="form3Example4"
                      id="font"
                    >
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: true,
                        pattern: {
                          value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/,
                        },
                      })}
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                    {errors.password?.type === "required" && (
                      <p style={{ color: "red" }} id="font">
                        This field is required
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p style={{ color: "red" }} id="font">
                        Please enter a valid Password
                      </p>
                    )}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check ">
                      <label
                        className="form-check-label"
                        // htmlFor="form2Example3"
                        id="font"
                      >
                        Terms & condition accepted
                      </label>
                      <input
                        {...register("checkbox", { required: true })}
                        className="form-check-input me-2"
                        type="checkbox"
                        value="true"
                        id="form2Example3"
                      />

                      {errors.checkbox?.type === "required" && (
                        <p style={{ color: "red" }} id="font">
                          please accept terms and condition
                        </p>
                      )}
                    </div>
                    <a href="#!" className="text-body " id="font">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-50"
                      //   style="padding-left: 2.5rem; padding-right: 2.5rem;"
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 py-2 mb-3" id="font">
                      Don't have an account?{" "}
                      <a href="#!" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
