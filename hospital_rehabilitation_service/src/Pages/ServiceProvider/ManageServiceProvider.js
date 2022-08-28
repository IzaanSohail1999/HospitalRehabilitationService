import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import hospital_icon from "../../img/hospital_icon.jpg";
import axios from 'axios';
import bin from "../../img/bin.jpg"
import edit from "../../img/edit.jpg"

function ManageServiceProvider(props) {
    
    const [serviceProviderInfo, setServiceProviderInfo] = useState([]);
    const [search, setSearch] = useState(false)
    const [name, setName] = useState('')
    const [postcode, setPostcode] = useState('')
    const [website, setWebsite] = useState('')
    const [ccgboundary, setCcgboundary] = useState('')
    const [type, setType] = useState('')
    const [serviceID, setServiceID] = useState([])



    let navigate = useNavigate();


    async function FetchAllData() {
        await axios.get(`http://localhost:8080/serviceProvider/getServiceProvider`)
            .then((res) => {
                console.log(res.data.serviceProvider)
                setServiceProviderInfo(res.data.serviceProvider)
            })
    }
    
    // async function FetchParticularData() {
    //     await axios.get(`http://localhost:8080/service/getCategoryServices?Category=${category}`)
    //         .then((res) => {
    //             setServiceInfo(res.data.service)
    //             // console.log(res.data.hospitals)
    //         })
    // }

    async function deleteServiceProvider(name) {
        await axios.delete(`http://localhost:8080/serviceProvider/deleteServiceProvider?name=${name}`)
            .then(function (response) {
                console.log(response.data);
                alert("Service Deleted")
                navigate(0);
            })
    }

    async function EditServiceProvider(name) {
        const url = "/EditServiceProvider?" + name
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
                                <h3 className="pgTitle">Manage Service Provider</h3>
                                <a data-toggle="modal" href='/AddServiceProvider' className="actionBtn">Add Service Provider</a>
                                <a style={{ marginRight: "0.5vh" }} href="/" className="actionBtn">Back</a>

                            </div>

                            <div className="row pgsection">

                                <table className="table tblSec">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Post Code</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Website</th>
                                            <th scope="col">Ccg Boundary</th>
                                            <th scope="col">Type</th>
                                            {/* <th scope="col">Service ID</th> */}
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
                                             {/* <td>
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
                                            </td> */}
                                            {/* <td><button onClick={() => FetchParticularData()}>Search</button></td> */}
                                        </tr>

                                        {serviceProviderInfo && serviceProviderInfo.map((serviceprovider, index) => (
                                            <tr>
                                                <td>{serviceprovider.name}</td>
                                                <td>{serviceprovider.postcode}</td>
                                                <td>{serviceprovider.phone}</td>
                                                <td>{serviceprovider.website}</td>
                                                <td>{serviceprovider.ccgboundary}</td>
                                                <td>{serviceprovider.type}</td>
                                                {/* <td>
                                                    {serviceprovider.serviceID && serviceprovider.serviceID.map((ID, index) => (
                                                        <tr>{ID}</tr>
                                                    ))}
                                                </td> */}
                                                <td><img onClick={() => deleteServiceProvider(serviceprovider.name)} style={{ height: "2vw", width: "2vw" }} src={bin} /></td>
                                                <td><img onClick={() => EditServiceProvider(serviceprovider.name)} style={{ height: "2vw", width: "2vw" }} src={edit} /></td>
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

export default ManageServiceProvider;