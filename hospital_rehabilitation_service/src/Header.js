import React, { useState, useEffect, useContext } from 'react';
import { HospitalContext } from '../src/context/HospitalContext'
import Logo_inner from "./img/logo_inner.png";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';

function Header() {
    const { role, Logout } = useContext(HospitalContext);

    return (
        <div id="wrap">
            <div className="top">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;