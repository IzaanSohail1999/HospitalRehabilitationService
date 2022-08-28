import React, { useState, useEffect, useContext } from 'react';
import Header from "../Header/Header";
import Logo from "../../img/logo.png";
import axios from 'axios';
import 'react-edit-text/dist/index.css';
import { useNavigate } from "react-router-dom";

function EditServiceProvider(props) {
    
    const [name, setName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [ccgboundary, setCcgboundary] = useState('');
    const [type, setType] = useState('');
    const [serviceID, setServiceID] = useState('');
    let navigate = useNavigate();
    const queryString = window.location.search;
    let text = queryString.split("?")
    const Name = text[1]
    const [serviceInfo, setserviceInfo] = useState([]);

    async function FetchData() {
        await axios.get(`http://localhost:8080/serviceProvider/getOneServiceProvider?name=${Name}`)
            .then((res) => {
                console.log(res.data.serviceprovider[0])
                setName(res.data.serviceprovider[0].name)
                setPostcode(res.data.serviceprovider[0].postcode)
                setPhone(res.data.serviceprovider[0].phone)
                setWebsite(res.data.serviceprovider[0].website)
                setCcgboundary(res.data.serviceprovider[0].ccgboundary)
                setType(res.data.serviceprovider[0].type)
                setServiceID(res.data.serviceprovider[0].serviceID)
            })
    }

    useEffect(() => {
        FetchData();
    }, []);

    async function updateData() {
    //     await fetch(`http://localhost:8080/service/updateServiceDetails`, {
    //         method: 'put',
    //         body: JSON.stringify({
    //             serviceID: serviceID,
    //             serviceName: serviceName,
    //             Category: Category,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //             navigate("/ManageServices");
    //         })
    }

    return (
        <div>
            <Header />
            <div className="login-bg">
                <div id="wrap">
                    <div style={{ marginRight: "5vh" }}className="row pgHead">
                        <a href="/ManageUser" className="actionBtn">Back</a>
                    </div>
                    <div className="loginParentContainer">
                        <div className="subContainer">
                            <div style={{ textAlign: "center" }}>
                                <img src={Logo} alt="Stonestep Logo" />
                                <h2>Rehabilitation Service Provider Directory</h2>
                            </div>
                            <div className="loginForm">
                                <label>Name</label>
                                <input type="text" placeholder={name} className="inputborder-btm field" /><br /><br />
                                <label>Post Code</label>
                                <input type="text" placeholder={postcode} onChange={(e) => setPostcode(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Phone</label>
                                <input type="text" placeholder={phone} onChange={(e) => setPhone(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Website</label>
                                <input type="text" placeholder={website} onChange={(e) => setWebsite(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>CCG Boundary</label>
                                <input type="text" placeholder={ccgboundary} onChange={(e) => setCcgboundary(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Type</label>
                                <input type="text" placeholder={type} onChange={(e) => setType(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Service ID</label>
                                {serviceID && serviceID.map((ID, index) => (
                                    <div>
                                        <input type="text" placeholder={ID} className="inputborder-btm field" /><br /><br />
                                    </div>
                                ))}
                                <button onClick={updateData} className="Loginbtn" >Add Service</button>
                                <button onClick={updateData} className="Loginbtn" >Remove Service</button>
                                <button onClick={updateData} className="Loginbtn" >Update Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default EditServiceProvider;