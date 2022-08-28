import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import hospital_icon from "../../img/hospital_icon.jpg";
import axios from 'axios';
import bin from "../../img/bin.jpg"
import edit from "../../img/edit.jpg"

function ManageServices(props) {
    
    const [serviceInfo, setServiceInfo] = useState([]);
    const [search, setSearch] = useState(false)
    const [serviceID, setServiceID] = useState('')
    const [serviceName, setServiceName] = useState('')
    const [category, setCategory] = useState('')

    let navigate = useNavigate();


    async function FetchAllData() {
        await axios.get(`http://localhost:8080/service/getService`)
            .then((res) => {
                console.log(res.data.service)
                setServiceInfo(res.data.service)
            })
    }
    
    async function FetchParticularData() {
        await axios.get(`http://localhost:8080/service/getCategoryServices?Category=${category}`)
            .then((res) => {
                setServiceInfo(res.data.service)
                // console.log(res.data.hospitals)
            })
    }

    async function deleteService(serviceID) {
        await axios.delete(`http://localhost:8080/service/deleteService?serviceID=${serviceID}`)
            .then(function (response) {
                console.log(response.data);
                alert("Service Deleted")
                navigate(0);
            })
    }

    async function EditService(serviceID) {
        const url = "/EditService?" + serviceID
        navigate(url)
    }

    useEffect(() => {
        FetchAllData();
    }, []);
    
    return (
        <div>
            <div id="wrap">
                <Header />
                <div className="pgbody">


                    <section className="contentBg">
                        <div className="container">

                            <div className="row pgHead">
                                <h3 className="pgTitle">Manage Services</h3>
                                <a data-toggle="modal" href='/AddService' className="actionBtn">Add Service</a>
                                <a style={{ marginRight: "0.5vh" }} href="/" className="actionBtn">Back</a>

                            </div>

                            <div className="row pgsection">

                                <table className="table tblSec">
                                    <thead>
                                        <tr>
                                            <th scope="col">service ID</th>
                                            <th scope="col">service Name</th>
                                            <th scope="col">Category</th>
                                            <th scope="col" className="lastTblele">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {/* <td>
                                                {serviceID != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setServiceID(e.target.value)}>
                                                        {serviceInfo && serviceInfo.map((service, index) => (
                                                            <option>{service.serviceID}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setServiceID(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {serviceInfo && serviceInfo.map((service, index) => (
                                                                <option>{service.serviceID}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {serviceName != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setServiceName(e.target.value)}>
                                                        {serviceInfo && serviceInfo.map((service, index) => (
                                                            <option >{service.serviceName}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setServiceName(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {serviceInfo && serviceInfo.map((service, index) => (
                                                                <option>{service.serviceName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td> */}
                                             <td>
                                                {category != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setCategory(e.target.value)}>
                                                        {serviceInfo && serviceInfo.map((service, index) => (
                                                            <option >{service.Category}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setCategory(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {serviceInfo && serviceInfo.map((service, index) => (
                                                                <option>{service.Category}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td><button onClick={() => FetchParticularData()}>Search</button></td>
                                        </tr>

                                        {serviceInfo && serviceInfo.map((service, index) => (
                                            <tr>
                                                <td>{service.serviceID}</td>
                                                <td>{service.serviceName}</td>
                                                <td>{service.Category}</td>
                                                <td><img onClick={() => deleteService(service.serviceID)} style={{ height: "2vw", width: "2vw" }} src={bin} /></td>
                                                <td><img onClick={() => EditService(service.serviceID)} style={{ height: "2vw", width: "2vw" }} src={edit} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </section>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default ManageServices;