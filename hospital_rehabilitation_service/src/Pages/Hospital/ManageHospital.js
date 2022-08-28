import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import hospital_icon from "../../img/hospital_icon.jpg";
import axios from 'axios';
import bin from "../../img/bin.jpg"
import edit from "../../img/edit.jpg"

function ManageHospital(props) {
    const [hospitalInfo, setHospitalInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [search, setSearch] = useState(false)
    const [name, setname] = useState('')
    const [address, setaddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setphone] = useState('')
    const [postCode, setpostcode] = useState('')
    const [website, setwebsite] = useState('')

    let navigate = useNavigate();


    async function FetchAllData() {
        await axios.get(`http://localhost:8080/hospital/getHospital`)
            .then((res) => {
                setHospitalInfo(res.data.hospital)
                // console.log(res.data.hospital);
                // console.log(hospitalInfo.length);
            })
    }
    
    async function FetchParticularData() {
        await axios.get(`http://localhost:8080/hospital/getParticularHospital?name=${name}&address=${address}&email=${email}&phone=${phone}&postCode=${postCode}&website=${website}`)
            .then((res) => {
                setHospitalInfo(res.data.hospitals)
                console.log(res.data.hospitals)
            })
    }
    async function deleteHospital(email) {
        await axios.delete(`http://localhost:8080/hospital/deleteHospital?email=${email}`)
            .then(function (response) {
                console.log(response.data);
                alert("Hospital Deleted")
                navigate(0);
            })
    }

    async function EditHospital(email) {
        const url = "/EditHospital?" + email
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
                                <h3 className="pgTitle">Manage Hospital</h3>
                                <a data-toggle="modal" href='/AddHospital' className="actionBtn">Add Hospital</a>
                                <a style={{ marginRight: "0.5vh" }} href="/" className="actionBtn">Back</a>

                            </div>

                            <div className="row pgsection">

                                <table className="table tblSec">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">PostCode</th>
                                            <th scope="col">Website</th>
                                            <th scope="col" className="lastTblele">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {name != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setname(e.target.value)}>
                                                        {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                            <option>{hospital.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setname(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option>{hospital.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {address != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setaddress(e.target.value)}>
                                                        {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                            <option >{hospital.address}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setaddress(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option>{hospital.address}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                             <td>
                                                {email != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setEmail(e.target.value)}>
                                                        {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                            <option >{hospital.email}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setEmail(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option>{hospital.email}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {phone != 0 && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setphone(e.target.value)}>
                                                        {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                            <option >{hospital.phone}</option>
                                                        ))}
                                                    </select>
                                                </div> || <div className="select-style_grid">
                                                        <select onChange={(e) => setphone(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option>{hospital.phone}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {postCode != 0 &&
                                                    <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                        <select onChange={(e) => setpostcode(e.target.value)}>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option >{hospital.postcode}</option>
                                                            ))}

                                                        </select>
                                                    </div> || <div className="select-style_grid">
                                                        <select onChange={(e) => setpostcode(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option>{hospital.postcode}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td> 
                                            <td>
                                                {website != 0 &&
                                                    <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                        <select onChange={(e) => setwebsite(e.target.value)}>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option >{hospital.website}</option>
                                                            ))}

                                                        </select>
                                                    </div> || <div className="select-style_grid">
                                                        <select onChange={(e) => setwebsite(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                                                <option>{hospital.website}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td><button onClick={() => FetchParticularData()}>Search</button></td>
                                        </tr>

                                        {hospitalInfo && hospitalInfo.map((hospital, index) => (
                                            <tr>
                                                {/* <td>{index+1}</td> */}
                                                <td>{hospital.name}</td>
                                                <td>{hospital.address}</td>
                                                <td>{hospital.email}</td>
                                                <td>{hospital.phone}</td>
                                                <td>{hospital.postcode}</td>
                                                <td>{hospital.website}</td>
                                                <td><img onClick={() => deleteHospital(hospital.email)} style={{ height: "2vw", width: "2vw" }} src={bin} /></td>
                                                <td><img onClick={() => EditHospital(hospital.email)} style={{ height: "2vw", width: "2vw" }} src={edit} /></td>
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

export default ManageHospital;