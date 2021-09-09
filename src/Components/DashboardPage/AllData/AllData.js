import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";

const AllData = () => {
  const [allData, setAllData] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    fetch("https://peaceful-beach-36227.herokuapp.com/allHiredCar")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
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
            });
        });
    }
  }, [orderStatus]);

  return (
    <div>
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
                    onChange={(e) => handleStatus(e, data._id)}
                  >
                    <option value="Hired">Hired</option>
                    <option value="On The Way">On The Way</option>
                    <option value="Complete">Complete</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllData;
