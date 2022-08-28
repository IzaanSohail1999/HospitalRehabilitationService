import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import Logo_inner from "./img/logo_inner.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { HospitalContext } from '../../context/HospitalContext'
import { Link } from "react-router-dom";
import bin from "../../img/bin.jpg"
import edit from "../../img/edit.jpg"
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from './../Header/Header';


function ManageUser(props) {
    const { role, Logout } = useContext(HospitalContext);
    const [userInfo, setUserInfo] = useState([]);
    const [search, setSearch] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [hospital, setHospital] = useState('')
    const [email, setEmail] = useState('')
    const [post, setPost] = useState('')

    let navigate = useNavigate();

    async function FetchAllData() {
        await axios.get(`http://localhost:8080/user/getUser`)
            .then((res) => {
                setUserInfo(res.data.user)
                console.log(res.data.user);
            })
    }

    async function FetchParticularData() {
        await axios.get(`http://localhost:8080/user/getParticularUser?email=${email}&firstName=${firstName}&lastName=${lastName}&hospital=${hospital}&post=${post}`)
            .then((res) => {
                setUserInfo(res.data.users)
                console.log(res.data.users)
            })
    }

    async function deleteUser(email) {
        await axios.delete(`http://localhost:8080/user/deleteUser?email=${email}`)
            .then(function (response) {
                console.log(response.data);
                alert("User Deleted")
                navigate(0);
            })
    }

    async function EditUser(email) {
        console.log("Edited");
        const url = "/EditUser?" + email
        navigate(url)
    }

    async function log() {
        console.log(firstName);
        console.log(lastName);
        console.log(hospital);
        console.log(email);
        console.log(post);
        console.log(search)
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
                                <h3 className="pgTitle">Manage User</h3>
                                <a href="/AddUser" className="actionBtn">Add User</a>
                                <a style={{ marginRight: "0.5vh" }} href="/" className="actionBtn">Back</a>
                            </div>
                            <div className="row pgsection">

                                <table className="table tblSec">
                                    <thead>
                                        <tr>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Hospital</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                            <th scope="col" className="lastTblele">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {firstName != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setFirstName(e.target.value)}>
                                                        {userInfo && userInfo.map((user, index) => (
                                                            <option>{user.firstName}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setFirstName(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {userInfo && userInfo.map((user, index) => (
                                                                <option>{user.firstName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {lastName != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setLastName(e.target.value)}>
                                                        {userInfo && userInfo.map((user, index) => (
                                                            <option >{user.lastName}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setLastName(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {userInfo && userInfo.map((user, index) => (
                                                                <option>{user.lastName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {hospital != "" && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setHospital(e.target.value)}>
                                                        {userInfo && userInfo.map((user, index) => (
                                                            <option >{user.hospital}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                    || <div className="select-style_grid">
                                                        <select onChange={(e) => setHospital(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {userInfo && userInfo.map((user, index) => (
                                                                <option>{user.hospital}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {email != 0 && <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                    <select onChange={(e) => setEmail(e.target.value)}>
                                                        {userInfo && userInfo.map((user, index) => (
                                                            <option >{user.email}</option>
                                                        ))}
                                                    </select>
                                                </div> || <div className="select-style_grid">
                                                        <select onChange={(e) => setEmail(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {userInfo && userInfo.map((user, index) => (
                                                                <option>{user.email}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                {post != 0 &&
                                                    <div className="select-style_grid" style={{ borderColor: "green" }}>
                                                        <select onChange={(e) => setPost(e.target.value)}>
                                                            {userInfo && userInfo.map((user, index) => (
                                                                <option >{user.role}</option>
                                                            ))}

                                                        </select>
                                                    </div> || <div className="select-style_grid">
                                                        <select onChange={(e) => setPost(e.target.value)}>
                                                            <option value="none" selected disabled hidden>Select...</option>
                                                            {userInfo && userInfo.map((user, index) => (
                                                                <option>{user.role}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                }
                                            </td>
                                            <td>
                                                <button style={{marginRight:"1vh"}} onClick={() => FetchParticularData()}>Search</button>
                                                <button onClick={() => FetchAllData()}>Back</button>
                                            </td>
                                        </tr>

                                        {userInfo && userInfo.map((user, index) => (
                                            <tr>
                                                {/* <td>{index+1}</td> */}
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.hospital}</td>
                                                <td>{user.email}</td>
                                                <td>{user.role}</td>
                                                <td><img onClick={() => deleteUser(user.email)} style={{ height: "2vw", width: "2vw" }} src={bin} /></td>
                                                <td><img onClick={() => EditUser(user.email)} style={{ height: "2vw", width: "2vw" }} src={edit} /></td>
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
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog modal_big">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h6 className="modal-title">Request update for</h6>
                            <h4 className="modal-title">Service Provider</h4>
                        </div>
                        <div className="modal-body">
                            <table className="table tblSecModal">
                                <thead>
                                    <tr>
                                        <th>Label</th>
                                        <th>label</th>
                                        <th>label</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Label</td>
                                        <td>Label</td>
                                        <td>Label</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <div style={{ float: "left" }}>
                                <button type="button" className="btn btn-dft" data-dismiss="modal">CANCEL</button>
                            </div>
                            <div style={{ float: "right" }}>
                                <button type="button" className="btn btn-rej" data-dismiss="modal">REJECT ALL</button>
                                <button type="button" className="btn btn-prm" data-dismiss="modal">APPROVE ALL</button>

                            </div>
                            <br clear="all" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ManageUser;