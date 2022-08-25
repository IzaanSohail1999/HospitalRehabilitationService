import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { HospitalContext } from '../../context/HospitalContext'
import Logo_inner from "../../img/logo_inner.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Logo from "../../img/logo.png";
import axios from 'axios';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { useNavigate } from "react-router-dom";

function EditUser(props) {
    // const { role, Logout } = useContext(HospitalContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [hospital, setHospital] = useState('');
    const [departement, setDepartement] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const queryString = window.location.search;
    let text = queryString.split("?")
    const email = text[1]
    const [userInfo, setUserInfo] = useState([]);

    async function FetchData() {
        await axios.get(`http://localhost:8080/getOneUser?email=${email}`)
            .then((res) => {
                console.log(res.data.users[0])
                setUserInfo(res.data.users[0])
                setFirstName(res.data.users[0].firstName)
                setLastName(res.data.users[0].lastName)
                setRole(res.data.users[0].role)
                setHospital(res.data.users[0].hospital)
                setDepartement(res.data.users[0].departement)
                setPassword(res.data.users[0].password)
            })
    }

    useEffect(() => {
        FetchData();
    }, []);

    async function updateData() {
        await fetch(`http://localhost:8080/updateUserDetails`, {
            method: 'put',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                hospital: hospital,
                departement: departement,
                email: email,
                password: password,
                role: role,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                navigate("/ManageUser");
            })
    }


    return (
        <div>
            <Header />
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
                                <input type="email" placeholder={userInfo.email} className="inputborder-btm field" /><br /><br />
                                <label>FirstName</label>
                                <input type="text" placeholder={userInfo.firstName} onChange={(e) => setFirstName(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>LastName</label>
                                <input type="text" placeholder={userInfo.lastName} onChange={(e) => setLastName(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Role</label>
                                <input type="text" placeholder={userInfo.role} onChange={(e) => setRole(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Hospital</label>
                                <input type="text" placeholder={userInfo.hospital} onChange={(e) => setHospital(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Departement</label>
                                <input type="text" placeholder={userInfo.departement} onChange={(e) => setDepartement(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Password</label>
                                <input type="text" placeholder={userInfo.password} onChange={(e) => setPassword(e.target.value)} className="inputborder-btm field" /><br /><br />
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

export default EditUser;