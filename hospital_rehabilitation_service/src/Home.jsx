import Logo_inner from "./img/logo_inner.png";
import User_icon from "./img/user_icon.png";
import "./css/bootstrap.css";
import "./css/style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./css/chosen.css";
import React, { useState, useEffect, useContext } from 'react';
import { HospitalContext } from '../src/context/HospitalContext'
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    const { role, Logout } = useContext(HospitalContext);

    return (
        <div className="bg_main">
            <div id="wrap">
                <div className="top nobg">
                    <div className="head" style={{ borderBottom: "0px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="logo push-left">
                                    <img src={Logo_inner} />
                                </div>
                                <h3>St George’s Hospital</h3>
                                <div className="navigation">
                                    <div className="userLnk">
                                        <div className="dropdown">
                                            <DropdownButton title={role} >
                                                <li><div onClick={Logout}>Log Out</div></li>
                                            </DropdownButton>
                                        </div>
                                    </div>
                                    <div className="actionBtn">
                                        <div className="dropdown">
                                            <DropdownButton title="Action">
                                                <Link to="/ManageUser">Manage Users</Link>
                                                <br />
                                                <Link to="#">Mange Services</Link>
                                                <br />
                                                <Link to="#">Manage Hospitals</Link>
                                                <br />
                                                <Link to="#">Change Requests</Link>
                                            </DropdownButton>
                                            {/* <button className="btn btn-prm dropdown-toggle" type="button" data-toggle="dropdown">Actions
                                                <span className="caret"></span></button>
                                            <ul className="dropdown-menu" multiple>
                                                <li><a href="#">Manage Users</a></li>
                                                <li><a href="#">Mange Services</a></li>
                                                <li><a href="#">Manage Hospitals</a></li>
                                                <li><a href="#">Change Requests</a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainpgContainer">
                    <h1 className="hmeMainHead">Discover</h1>
                    <h2 className="hmeSubHead">Best Rehabilitation Centre Near You</h2>
                    <div className="boxone">
                        <span>Choose Service</span>
                        <div className="selectcontainer" style={{ width: "100%" }}>
                            <select data-placeholder="Slect Serivces" className="chosen-select" multiple >
                                <option value=""></option>
                                <option value="United States">One Service Provider</option>
                                <option value="United States">Two</option>
                                <option value="United States">Three</option>
                                <option value="United States">Four</option>
                                <option value="United States">One Service Provider</option>
                                <option value="United States">Two</option>
                                <option value="United States">One Service Provider</option>
                                <option value="United States">Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="boxtwo">
                        <ul className="unstyled hmeRdo" style={{ paddingLeft: "0px", marginBottom: "0px" }}>
                            <li >
                                <input type="radio" id="test1" name="radio-group" />
                                <label for="test1">Post Code</label>
                            </li>
                            <li >
                                <input type="radio" id="test2" name="radio-group" />
                                <label for="test2">Hospital</label>
                            </li>
                        </ul>
                        <input type="text" placeholder="e.g. 75689" className="filterTxt" style={{ marginTop: "5px", width: "100%", marginLeft: "0px" }} />
                    </div>
                    <div className="boxthree">
                        <a href="" className="Btn">SEARCH</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;