import React, { useState, useEffect, useContext } from 'react';
import Header from "../Header/Header";
import Logo from "../../img/logo.png";
import axios from 'axios';
import 'react-edit-text/dist/index.css';
import { useNavigate } from "react-router-dom";

function EditService(props) {
    const [serviceID, setserviceID] = useState('');
    const [serviceName, setserviceName] = useState('');
    const [Category, setCategory] = useState('');
    let navigate = useNavigate();
    const queryString = window.location.search;
    let text = queryString.split("?")
    const ID = text[1]
    const [serviceInfo, setserviceInfo] = useState([]);

    async function FetchData() {
        await axios.get(`http://localhost:8080/service/getOneService?serviceID=${ID}`)
            .then((res) => {
                console.log(res.data.service)
                setserviceID(res.data.service[0].serviceID)
                setserviceName(res.data.service[0].serviceName)
                setCategory(res.data.service[0].Category)
            })
    }

    useEffect(() => {
        FetchData();
    }, []);

    async function updateData() {
        await fetch(`http://localhost:8080/service/updateServiceDetails`, {
            method: 'put',
            body: JSON.stringify({
                serviceID: serviceID,
                serviceName: serviceName,
                Category: Category,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                navigate("/ManageServices");
            })
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
                                <label>Service ID</label>
                                <input type="text" placeholder={serviceID} className="inputborder-btm field" /><br /><br />
                                <label>Service Name</label>
                                <input type="text" placeholder={serviceName} onChange={(e) => setserviceName(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Category</label>
                                <input type="text" placeholder={Category} onChange={(e) => setCategory(e.target.value)} className="inputborder-btm field" /><br /><br />
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

export default EditService;