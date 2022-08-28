import React, { useState, useEffect, useContext } from 'react';
import Header from "../Header/Header";
import Logo from "../../img/logo.png";
import axios from 'axios';
import 'react-edit-text/dist/index.css';
import { useNavigate } from "react-router-dom";


function EditHospital(props) {
    const [name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Postcode, setPostcode] = useState('');
    const [Website, setWebsite] = useState('');
    let navigate = useNavigate();
    const queryString = window.location.search;
    let text = queryString.split("?")
    const email = text[1]
    const [hospitalInfo, setHospitalInfo] = useState([]);

    async function FetchData() {
        await axios.get(`http://localhost:8080/hospital/getOneHospital?email=${email}`)
            .then((res) => {
                // console.log(res.data.hospitals[0])
                setName(res.data.hospitals[0].name)
                setAddress(res.data.hospitals[0].address)
                setEmail(res.data.hospitals[0].email)
                setPhone(res.data.hospitals[0].phone)
                setPostcode(res.data.hospitals[0].postcode)
                setWebsite(res.data.hospitals[0].website)
            })
    }

    useEffect(() => {
        FetchData();
    }, []);

    async function updateData() {
        await fetch(`http://localhost:8080/hospital/updateHospitalDetails`, {
            method: 'put',
            body: JSON.stringify({
                name: name,
                address: Address,
                email: Email,
                phone: Phone,
                postCode: Postcode,
                website: Website
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                navigate("/ManageHopital");
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
                                <label>Name</label>
                                <input type="email" placeholder={Email} className="inputborder-btm field" /><br /><br />
                                <label>Email</label>
                                <input type="text" placeholder={name} onChange={(e) => setName(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Address</label>
                                <input type="text" placeholder={Address} onChange={(e) => setAddress(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>phone</label>
                                <input type="text" placeholder={Phone} onChange={(e) => setPhone(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Post Code</label>
                                <input type="text" placeholder={Postcode} onChange={(e) => setPostcode(e.target.value)} className="inputborder-btm field" /><br /><br />
                                <label>Website</label>
                                <input type="text" placeholder={Website} onChange={(e) => setWebsite(e.target.value)} className="inputborder-btm field" /><br /><br />
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

export default EditHospital;