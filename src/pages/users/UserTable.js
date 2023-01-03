import React, { useEffect, useState } from "react";
import "../users/User.css";
import { useApi } from "../../context/useApi";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getDetailById } from "../../lib/Service";

const UserTable = () => {
  const navigation = useNavigate();
  const { apiState, getUserList, deleteUser } = useApi();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getUserList();
  }, []);

  const editRecord = (id) => {
    setTimeout(() => {
      navigation("/edit/" + id);
    }, 1000);
  };

  const deleteRecord = (id) => {
    deleteUser(id);
  };

  const handleClose = () => setShow(false);
  useEffect(() => {}, []);

  const handleShow = async (id) => {
    setShow(true);
    if (id) {
      const result = await getDetailById(id);
      console.log("result==+", result);
      setData(result);
      console.log("data", data);
    }
  };
  return (
    <div className="parent_user">
      <div className="btn_div mt-5">
        <Link to="/addUser" className="btn btn-outline-info">
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
            {apiState?.getAllUser?.map((item, index) => (
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
                    // className="btn btn-outline-primary"
                    id="icon"
                    class="btn btn-outline-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => handleShow(item.id)}
                  >
                    <FiEye size={20} />
                  </Link>
                  <Link
                    className="btn btn-outline-info"
                    id="icon"
                    onClick={() => editRecord(item.id)}
                  >
                    <FiEdit size={20} />
                  </Link>
                  <Link
                    className="btn btn-outline-danger"
                    id="icon"
                    onClick={() => {
                      deleteRecord(item.id);
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
      {/* model */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        closeButton
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>id : {data?.result?.id}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Name: {data?.result?.name}</h3>
          <h4>Salary: {data?.result?.salary}</h4>
          <h4>Age: {data?.result?.age}</h4>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserTable;
