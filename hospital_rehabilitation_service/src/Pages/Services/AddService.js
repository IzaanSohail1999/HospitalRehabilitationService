import React from 'react';
import Header from './../Header/Header';
import Logo from "../../img/logo.png";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

function AddService(props) {
    let navigate = useNavigate();
    const [serviceID, setserviceID] = useState('');
    const [serviceName, setserviceName] = useState('');
    const [category, setcategory] = useState('');

    async function AddData(){
        let result = await fetch('http://localhost:8080/service/saveService', {
            method: 'post',
            body: JSON.stringify({
                "serviceID": serviceID,
                "serviceName": serviceName,
                "Category": category
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/ManageServices");
    }

    return (
        <div>
        <Header/>
        <div className="login-bg">
            <div id="wrap">
                <div style={{ marginRight: "5vh" }}className="row pgHead">
                    <a href="/ManageServices" className="actionBtn">Back</a>
                </div>
                <div className="loginParentContainer">
                    <div className="subContainer">
                        <div style={{ textAlign: "center" }}>
                            <img src={Logo} alt="Stonestep Logo" />
                            <h2>Rehabilitation Service Provider Directory</h2>
                        </div>
                        <div className="loginForm">
                            <label>Service ID</label>
                            <input type="text" onChange={(e) => setserviceID(e.target.value)} className="inputborder-btm field" /><br /><br />
                            <label>Service Name</label>
                            <input type="text" onChange={(e) => setserviceName(e.target.value)} className="inputborder-btm field" /><br /><br />
                            <label>Category</label>
                            <input type="email" onChange={(e) => setcategory(e.target.value)} className="inputborder-btm field" /><br /><br />
                            <button onClick={AddData} className="Loginbtn" >Add Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddService;