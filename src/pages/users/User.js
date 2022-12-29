import React, { useEffect } from "react";
import "../users/User.css";
import { useApi } from "../../context/useApi";
const User = () => {
  const { apiState, getUser } = useApi();
  console.log("apiState", apiState);

  useEffect(() => {
    getUser();
    console.log("getUser apistate", apiState.getAllUser);
  }, [apiState]);
  return (
    <div className="parent_user">
      <div className="btn_div mt-5">
        <button
          type="button"
          className="btn btn-outline-info text-bg-secondary"
        >
          Add User
        </button>
      </div>
      <div className="list_div">
        <h1 className="text-alight-center">List of users</h1>
      </div>
      <div className=" shadow p-3 mb-5 bg-body rounded">
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
