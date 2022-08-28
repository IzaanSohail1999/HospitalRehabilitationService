import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/chosen.css";
import React, { useState, useEffect, useContext } from 'react';
import { HospitalContext } from '../../context/HospitalContext'
import Header from "../Header/Header";
import axios from "axios";


const Home = () => {
    const { role, Logout } = useContext(HospitalContext);
    const [serviceInfo, setServiceInfo] = useState([]);
    const [service, setservice] = useState('')
    const [type, settype] = useState('')
    const [category, setcategory] = useState('')

    async function FetchAllServices() {
        await axios.get(`http://localhost:8080/service/getService`)
            .then((res) => {
                setServiceInfo(res.data.service)
            })
    }

    useEffect(() => {
        FetchAllServices();
    }, []);

    async function Search() {
        console.log(service);
        console.log(category);
        console.log(type);
        if(service && category && type) {
            window.location.href = "/ServiceProvider?serviceName="+service+"&Category="+category+"&Type="+type;
        }
        else{
            console.log("parameter empty")
        }
        // await axios.get(`http://localhost:8080/search/searchService?serviceName=${service}&Category=${category}&Type=${type}`)
        //     .then((res) => {
        //         console.log(res.data.serviceprovider)
        //         setprovider(res.data.serviceprovider)
        //     })
    }

    return (
        <div>
            <div className="bg_main">
                <Header />
                <div id="wrap">
                    <div className="mainpgContainer">
                        <h1 className="hmeMainHead">Search</h1>
                        <h2 className="hmeSubHead">Rehabilitation Services by postcode or name of hospital</h2>
                        <div class="boxone">
                            <span>Choose Service</span>
                            <div class="select-style select-Sort" style={{ float: "right" }}>
                                <select id="directorysearch-categoryid" class="filterType" onChange={(e) => setcategory(e.target.value)}>
                                    <option>Adult</option>
                                    <option>Paediatrics</option>
                                </select>
                            </div>
                            <br /><br />
                            <div class="selectcontainer" style={{ width: "100%" }}>
                                <select id="directorysearch-categoryid" class="filterType" style={{ border: "transparent" }} onChange={(e) => setservice(e.target.value)}>
                                    {serviceInfo && serviceInfo.map((service, index) => (
                                        <option>{service.serviceName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="boxtwo">
                            <ul className="unstyled hmeRdo" style={{ paddingLeft: "0px", marginBottom: "0px" }}>
                                <li>
                                    <input type="radio" id="test1" name="radio-group" onClick={() => settype("NHS")} />
                                    <label for="test1">NHS</label>
                                </li>
                                <li >
                                    <input type="radio" id="test2" name="radio-group" onClick={() => settype("Private")} />
                                    <label for="test2">Private</label>
                                </li>
                                <li >
                                    <input type="radio" id="test3" name="radio-group" onClick={() => settype("All")} />
                                    <label for="test3">All</label>
                                </li>
                            </ul>
                        </div>
                        <div className="boxthree">
                            <a className="Btn" onClick={() => Search()}>SEARCH</a>
                        </div>
                    </div>
                    {/* <div>
                        {provider && provider.map((providers, index) => (
                            <option>{providers.name}</option>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Home;