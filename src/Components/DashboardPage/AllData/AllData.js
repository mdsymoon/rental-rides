import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const AllData = () => {
    const [allData , setAllData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/allHiredCar') 
        .then(res => res.json())
        .then(data => {
            setAllData(data);
           
        },[])
    })
    return (
        <div>
            <h1> All User's Data</h1>
            <div>
                <Table style={{ minWidth: '700px' }} responsive>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Hired Car</th>
                            <th>Price</th>
                            <th>Hired Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map(data => 
                                <tr key={data._id}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.service}</td>
                                    <td>{data.price}</td>
                                    <td>{data.orderDate}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllData;