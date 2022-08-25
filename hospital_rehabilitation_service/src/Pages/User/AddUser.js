import React from 'react';
import Header from './../Header/Header';
import Logo from "../../img/logo.png";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

function AddUser(props) {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [hospital, setHospital] = useState('');
    const [departement, setDepartement] = useState('');
    const [password, setPassword] = useState('');

    async function AddData(){
        let result = await fetch('http://localhost:8080/saveUser', {
            method: 'post',
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "role": role,
                "hospital": hospital,
                "departement": departement,
                "password": password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // result = await result.json();
        // console.log(result);
        navigate("/ManageUser");
    }

    return (
        <div>
            <Header/>
            <div className="login-bg">
                <div id="wrap">
                    <div className="loginParentContainer">
                        <div className="subContainer">
                            <div style={{ textAlign: "center" }}>
                                <img src={Logo} alt="Stonestep Logo" />
                                <h2>Rehabilitation Service Provider Directory</h2>
                            </div>
                            <div className="loginForm">
                                <label>Email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>FirstName</label>
                                <input type="text" onChange={(e) => setFirstName(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>LastName</label>
                                <input type="text" onChange={(e) => setLastName(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Role</label>
                                <input type="text" onChange={(e) => setRole(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Hospital</label>
                                <input type="text" onChange={(e) => setHospital(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Departement</label>
                                <input type="text" onChange={(e) => setDepartement(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Password</label>
                                <input type="text"  onChange={(e) => setPassword(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <button onClick={AddData} className="Loginbtn" >Update Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUser;