import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./register.css";
import { useApi } from "../../context/useApi";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    password: "",
    checkbox: "",
  });
  const { registerUser } = useApi();
  const onSubmit = (data) => {
    registerUser(data, reset);
  };
  return (
    <div className="background">
      <section className="sub_bgd">
        <div className="form">
          <div className="row d-flex justify-content-center align-items-center h-50 reg-row">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow  rounded  bg-light mt-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-center  font-weight-bold" id="fSized">
                  Register
                </p>
                {/* <!-- Name input --> */}
                <div className="form-outline mb-1">
                  <label
                    className="form-label"
                    id="font"
                    htmlFor="form3Example3"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                      minLength: 4,
                    })}
                    type="name"
                    id="form3Example3"
                    className="form-control"
                    placeholder="Enter a name"
                  />
                  {errors.name?.type === "required" && (
                    <p style={{ color: "red" }} id="font">
                      This field is required
                    </p>
                  )}
                  {errors.name?.type === "minLength" && (
                    <p style={{ color: "red" }} id="font">
                      Minimum 4 character allow.
                    </p>
                  )}
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-2">
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
                    className="form-control"
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
                {/* <!-- Number input --> */}
                <div className="form-outline mb-1">
                  <label
                    className="form-label"
                    id="font"
                    htmlFor="form3Example3"
                  >
                    Number
                  </label>
                  <input
                    {...register("mobile", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                    type="mobile"
                    id="form3Example3"
                    className="form-control"
                    placeholder="Enter a mobile No"
                  />
                  {errors.mobile?.type === "required" && (
                    <p style={{ color: "red" }} id="font">
                      This field is required
                    </p>
                  )}
                  {errors.mobile?.type === "minLength" && (
                    <p style={{ color: "red" }} id="font">
                      Minimum 10 number allow.
                    </p>
                  )}
                  {errors.mobile?.type === "maxLength" && (
                    <p style={{ color: "red" }} id="font">
                      maximum 10 number allow.
                    </p>
                  )}
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-2">
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
                    className="form-control"
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

                {/* <!-- Checkbox --> */}
                <div className="form-check ">
                  <label className="form-check-label" id="font">
                    Terms & condition accepted
                  </label>
                  <input
                    {...register("checkbox", { required: true })}
                    className="form-check-input "
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

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary h-20 w-50">
                    Register
                  </button>
                  <p className="small fw-bold mt-2 py-2 mb-3" id="font">
                    Have already an account?{" "}
                    <NavLink to="/login" className="text-danger">
                      Login here
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
