import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Users.css";
import { useApi } from "../../context/useApi";
const AddUser = () => {
  const { id } = useParams()
  console.log('iddd', id);
  const { addUser, getDetail, apiState, updateUser } = useApi();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    name: '',
    age: '',
    salary: ''
  });


  useEffect(() => {
    reset();
    getDetail(id);
    // setUser(apiState.userDetail);
    setDataValue();
  }, []);

  const setDataValue = () => {
    console.log("reserrrrr")

    if (apiState.userDetail) {
      setValue('name', apiState.userDetail.name)
      setValue('age', apiState.userDetail.age)
      setValue('salary', apiState.userDetail.salary)
    }
  }

  const onSubmit = (data) => {
    if (id) {
      let params = data
      params.id = id
      updateUser(params)

    } else {

      addUser(data);
    }
  };
  return (
    <div className="background">
      <section className="sub_bgd">
        {/* <Toast ref={toast}></Toast> */}
        <div className="form">
          <div className="row d-flex justify-content-center align-items-center h-50 reg-row">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow  rounded  bg-light mt-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="font-weight-bold mt-3" id="fSized">
                  AddUser
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
                    placeholder="Enter name"
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
                {/* <!-- salary input --> */}
                <div className="form-outline mb-1">
                  <label
                    className="form-label"
                    id="font"
                    htmlFor="form3Example3"
                  >
                    Salary
                  </label>
                  <input
                    {...register("salary", {
                      required: true,
                      minLength: 3,
                      maxLength: 10,
                    })}
                    type="salary"
                    id="form3Example3"
                    className="form-control"
                    placeholder="Enter salary"
                  />
                  {errors.salary?.type === "required" && (
                    <p style={{ color: "red" }} id="font">
                      This field is required
                    </p>
                  )}
                  {errors.salary?.type === "minLength" && (
                    <p style={{ color: "red" }} id="font">
                      Minimum 3 number allow.
                    </p>
                  )}
                  {errors.salary?.type === "maxLength" && (
                    <p style={{ color: "red" }} id="font">
                      maximum 5 number allow.
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
                    Age
                  </label>
                  <input
                    {...register("age", {
                      required: true,
                      minLength: 2,
                      maxLength: 2,
                    })}
                    type="age"
                    id="form3Example3"
                    className="form-control"
                    placeholder="Enter age"
                  />
                  {errors.age?.type === "required" && (
                    <p style={{ color: "red" }} id="font">
                      This field is required
                    </p>
                  )}
                  {errors.age?.type === "minLength" && (
                    <p style={{ color: "red" }} id="font">
                      Minimum 2 number allow.
                    </p>
                  )}
                  {errors.age?.type === "maxLength" && (
                    <p style={{ color: "red" }} id="font">
                      maximum 2 number allow.
                    </p>
                  )}
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary h-20 w-50 mb-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddUser;
