import React, { useState, useEffect, useContext } from 'react';
import { HospitalContext } from '../../context/HospitalContext'
import Logo_inner from "../../img/logo_inner.png";
import user_icon from "../../img/user_icon.png";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
// import "./css/style.css";
import "../../css/style.css"

function Header() {
    const { role, Logout } = useContext(HospitalContext);

    function Home(){
        window.location.href = "/"
    }

    return (
        <div id="wrap">
            <div className="top">
                <div className="head" style={{ borderBottom: "0px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="logo push-left">
                                <img onClick={Home} src={Logo_inner} />
                            </div>
                            {/* <h3>St George’s Hospital</h3> */}
                            {/* <div className="navigation">
                                <div className="userLnk">
                                    <div className="dropdown">
                                        <DropdownButton title={role} >
                                            <li><div onClick={Logout}>Log Out</div></li>
                                        </DropdownButton>
                                    </div>
                                </div>
                                <div style={{marginRight:"1vw"}} className="actionBtn">
                                    <div className="dropdown">
                                        <DropdownButton title="Action">
                                            <Link to="/ManageUser">Manage Users</Link>
                                            <br />
                                            <Link to="#">Mange Services</Link>
                                            <br />
                                            <Link to="/ManageHopital">Manage Hospitals</Link>
                                            <br />
                                            <Link to="#">Change Requests</Link>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div> */}
                            <div className="navigation">
                            <div className="userLnk">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown"> <img src={user_icon} /> {role}
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a onClick={Logout}>Log Out</a></li>
                                    <li><a href='/ContactUs'>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="actionBtn">
                            <div className="dropdown">
                                <button className="btn btn-prm dropdown-toggle" type="button" data-toggle="dropdown">Actions<span className="caret"></span></button>
                                <ul className="dropdown-menu  pull-right">
                                    <li><a href="/ManageUser">Manage Users</a></li>
                                    <li><a href='/ManageServices'>Mange Services</a></li>
                                    <li><a href='/ManageHopital'>Manage Hospitals</a></li>
                                    {/* <li><a >Manage Private Hospitals</a></li> */}
                                    {/* <li><a >Manage Departments/Companies</a></li> */}
                                    <li><a href='/ManageServiceProvider'>Manage Service Providers</a></li>
                                    {/* <li><a href="#" data-toggle="modal" data-target="#modal" value="/cardinal/web/service-provider/create" title="Add Service Provider" className="showModal"> Add Service Provider</a></li>  */}
                                    {/* <li><a >Manage Requests</a></li> */}
                                    {/* <li><a >Download Reports</a></li>  */}
                                </ul>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;