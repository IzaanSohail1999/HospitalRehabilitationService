import React from 'react';
import Header from './../Header/Header';
import Logo from "../../img/logo.png";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

function AddHospital(props) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [postCode, setPostCode] = useState('');
    const [website, setWebsite] = useState('');

    async function AddData(){
        let result = await fetch('http://localhost:8080/hospital/saveHospital', {
            method: 'post',
            body: JSON.stringify({
                "name": name,
                "address": address,
                "email": email,
                "phone": phone,
                "postCode": postCode,
                "website": website
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/ManageHopital");
    }

    return (
        <div>
            <Header/>
            <div className="login-bg">
                <div id="wrap">
                    <div style={{ marginRight: "5vh" }}className="row pgHead">
                        <a href="/ManageHopital" className="actionBtn">Back</a>
                    </div>
                    <div className="loginParentContainer">
                        <div className="subContainer">
                            <div style={{ textAlign: "center" }}>
                                <img src={Logo} alt="Stonestep Logo" />
                                <h2>Rehabilitation Service Provider Directory</h2>
                            </div>
                            <div className="loginForm">
                                <label>Name</label>
                                <input type="text" onChange={(e) => setName(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Address</label>
                                <input type="text" onChange={(e) => setAddress(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Phone</label>
                                <input type="text" onChange={(e) => setPhone(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>postCode</label>
                                <input type="text" onChange={(e) => setPostCode(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Website</label>
                                <input type="text" onChange={(e) => setWebsite(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <button onClick={AddData} className="Loginbtn" >Add Hospital</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddHospital;