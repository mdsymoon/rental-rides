import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import spinnerGif from "../../../Images/Spinner-1s-200px.gif";
const AllData = () => {
  const [allData, setAllData] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    fetch("https://peaceful-beach-36227.herokuapp.com/allHiredCar")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoadData(true);
      });
  }, []);

  const handleStatus = (e, _id) => {
    const newStatus = {
      _id,
      orderStatus: e.target.value,
    };
    setOrderStatus(newStatus);
  };

  useEffect(() => {
    if (orderStatus) {
      fetch(`https://peaceful-beach-36227.herokuapp.com/updateStatus`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderStatus),
      })
        .then((res) => res.json())
        .then((data) => {
          fetch(`https://peaceful-beach-36227.herokuapp.com/allHiredCar`)
            .then((res) => res.json())
            .then((data) => {
              setAllData(data);
              setLoadData(true);
            });
          setLoadData(true);
        });
    }
  }, [orderStatus]);

  const handleDelete = (_id) => {
    fetch("https://peaceful-beach-36227.herokuapp.com/deleteHired", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://peaceful-beach-36227.herokuapp.com/allHiredCar`)
          .then((res) => res.json())
          .then((data) => {
            setAllData(data);
          });
      });
  };

  return (
    <div className="mt-5">
      <h1> All User's Data</h1>
      <div>
        <Table style={{ minWidth: "700px" }} responsive>
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Hired Car</th>
              <th>Price</th>
              <th>Hired Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.service}</td>
                <td>{data.price}</td>
                <td>{data.orderDate}</td>
                <td>
                  <select
                    aria-label="Default select example"
                    className="form-select"
                    value={data.orderStatus}
                    name="orderStatus"
                    onChange={(e) => {handleStatus(e, data._id);setLoadData(false)}}
                  >
                    <option value="Hired">Hired</option>
                    <option value="On The Way">On The Way</option>
                    <option value="Complete">Complete</option>
                    
                  </select>
                  
                </td>
                <td
                  className="text-center text-danger"
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  onClick={() => handleDelete(data._id)}
                >
                  <RiDeleteBin2Fill />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center">
          {!loadData && <img className="text-center" src={spinnerGif} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default AllData;
