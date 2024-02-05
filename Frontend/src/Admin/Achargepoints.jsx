import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';
// import "./users.css"

const Achargepoints = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:7000/chargestations`)
            .then((response) => {
                setItem(response.data);
                // setLoading(false);
            })
            .catch((error) => {
                // setError('Failed to fetch projects.');
                // setLoading(false);
            });
    }, []);

    const deleteData = (taskId) => {
        axios.delete(`http://localhost:7000/stationdelete/${taskId}`);
        window.location.assign('/achargepoints');
        alert('station is deleted');
    };
   


    return (
        <div>
            <Anavbar />
            <br />
            <h1 className='text-center'>Stations</h1> <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Table striped bordered hover variant="dark" style={{ width: "70%" }}>
                    <thead>
                        <tr>
                            <th>sl/no</th>
                            <th>SationId</th>
                            <th>Charging Point Name</th>
                            <th>Address</th>
                            <th>Phno</th>
                            <th>Timings</th>
                            <th>Ratings</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <strong>Address:</strong>
                                    {item.address_components.street_address}, {item.address_components.city},{' '}
                                    {item.address_components.zipcode}, {item.address_components.district},{' '}
                                    {item.address_components.state}, {item.address_components.country}.{' '}

                                </td>
                                <td>{item.phone_number}</td>
                                <td>{item.opening_hours}</td>
                                <td>{item.rating}</td>
                                <td>
                                    <button style={{ border: 'none', background: 'none' }}>
                                    <Link to={`/editchargestation/${item._id}`} style={{ color: 'blue', textDecoration: 'none' }}>
  <FaEdit />
</Link>

                                    </button>
                                    <button onClick={() => deleteData(item._id)} style={{ border: 'none', color: 'red', background: 'none',paddingLeft:"35px" }}>
                                        <FaTrash />
                                    </button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default Achargepoints
