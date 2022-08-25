import Logo_inner from "../../img/logo_inner.png";
import User_icon from "../../img/user_icon.png";
import "../../css/bootstrap.css";
import "../../css/style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "../../css/chosen.css";
import React, { useState, useEffect, useContext } from 'react';
import { HospitalContext } from '../../context/HospitalContext'
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";


const Home = () => {
    const { role, Logout } = useContext(HospitalContext);

    return (
        <div>
            
        <div className="bg_main">
            <Header/>
            <div id="wrap">
                <div className="mainpgContainer">
                    <h1 className="hmeMainHead">Discover</h1>
                    <h2 className="hmeSubHead">Best Rehabilitation Centre Near You</h2>
                    <div className="boxone">
                        <span>Choose Service</span>
                        <div className="selectcontainer" style={{ width: "100%" }}>
                            <select data-placeholder="Select Services" className="chosen-select" multiple >
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
          {/* <div>
          <Footer/>
      </div> */}
      </div>
    );
}

export default Home;