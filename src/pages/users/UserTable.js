import React, { useEffect } from "react";
import "../users/User.css";
import { useApi } from "../../context/useApi";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
const UserTable = () => {
  const { apiState, getUserList } = useApi();
  // getUserList();
  useEffect(() => {
    getUserList();
    console.log("getUser apistate userpage", apiState);
  }, [apiState.getUserList]);
  return (
    <div className="parent_user">
      <div className="btn_div mt-5">
        <Link to="/addUser" className="btn btn-outline-info text-bg-secondary">
          Add User
        </Link>
      </div>
      <div className="list_div">
        <h1 className="text-alight-center">List of users</h1>
      </div>
      <div className=" shadow p-3 mb-5 bg-body rounded">
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Profile</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {apiState.getAllUser.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src="/user.jpg" id="img" />
                </td>
                <td>{item?.name}</td>
                <td>{item?.age}</td>
                <td>{item?.salary}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary"
                    id="icon"
                    onClick={() => {
                      alert("hiirrrrr");
                    }}
                  >
                    <FiEye size={20} />
                  </Link>
                  <Link
                    class="btn btn-outline-info"
                    id="icon"
                    onClick={() => {
                      alert("edit");
                    }}
                  >
                    <FiEdit size={20} />
                  </Link>
                  <Link
                    class="btn btn-outline-danger"
                    id="icon"
                    onClick={() => {
                      alert("delet");
                    }}
                  >
                    <FiTrash2 size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
