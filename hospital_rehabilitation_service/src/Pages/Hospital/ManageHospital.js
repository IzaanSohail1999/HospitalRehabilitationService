import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import hospital_icon from "../../img/hospital_icon.jpg";
import axios from 'axios';

function ManageHospital(props) {
    const [hospitalInfo, setHospitalInfo] = useState([]);

    async function FetchAllData() {
        await axios.get(`http://localhost:8080/getHospital`)
            .then((res) => {
                setHospitalInfo(res.data.hospital)
                // console.log(res.data.hospital);
                // console.log(hospitalInfo.length);
            })
    }
    
    useEffect(() => {
        FetchAllData();
    }, []);
    
    return (
        <div>
            <div id="wrap">
                <Header />
                <div className="pgbody">
                    <div className="bdHead">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <ul className="bdcrumb">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Pictures</a></li>
                                        <li><a href="#">Summer 15</a></li>
                                    </ul> */}
                                </div>
                                <div className="col-md-6">
                                    <h1 className="pg-head">Hospitals</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="contentBg">
                        <div className="container">
                            {/*<div className="col-md-3 nopadding_l">
                                <div className="box">
                                    <h2 className="filters">Filters</h2>
                                    <hr />
                                    <h3 className="filter_head">Services</h3>
                                     <ul className="unstyled centered" style={{listStyle: "none"}}>
                                        <li>
                                            <label className="control control--checkbox">Inpatient Orthopaedic Physiotherapy
                                                <input type="checkbox" checked="checked" />
                                                <div className="control__indicator"></div>
                                            </label>


                                        </li>
                                        <li>

                                            <label className="control control--checkbox">Inpatient Orthopaedic Physiotherapy
                                                <input type="checkbox" checked="checked" />
                                                <div className="control__indicator"></div>
                                            </label>



                                        </li>


                                    </ul> 
                                    <a href="" className="add_service_btn">manage services</a>
                                    <hr />
                                     <ul className="unstyled">

                                        <li style={{marginBottom: "20px"}}>
                                            <input type="radio" id="test1" name="radio-group" />
                                            <label for="test1">Post Code</label> <br />
                                            <input type="text" placeholder="e.g. 75689" className="filterTxt" />
                                        </li>
                                        <li >
                                            <input type="radio" id="test2" name="radio-group" />
                                            <label for="test2">Hospital</label>
                                            <input type="text" placeholder="e.g. Admiral Hospital" className="filterTxt" />

                                        </li>
                                    </ul> 

                                </div> 
                            </div>*/}
                            <div className="col-md-9">
                                <div className="row">
                                     <div className="col-md-6 nopadding_l">
                                        <h6>Showing {hospitalInfo.length} results</h6>
                                    </div>
                                     <div className="col-md-6 nopadding_r">

                                        {/* <div className="select-style select-Sort" style={{float:"right"}}>
                                            <select>
                                                <option value="volvo">Services</option>
                                                <option value="saab">Name</option>

                                            </select>
                                        </div>
                                        <label className="sort" for="" style={{float:"right"}}>Sort by:</label> */}
                                    </div> 
                                </div>
                                <div className="row srchListing">
                                { hospitalInfo && hospitalInfo.map((hospital, index) => {  
                                    console.log(index, hospital);
                                        // <a>
                                        //     <div >
                                        //         <div >
                                        //             {/* <img style={{height:"6vw", width: "6vw"}} src={hospital_icon}/> */}
                                        //             <h2 >
                                        //                 Service Provder 1
                                        //             </h2>
                                        //             {/* <div >
                                        //                 <span>Hydroptherapy</span> <span>Community Neuro</span> <span>Inpatient Orthopaedic Physiotherapy</span>
                                        //             </div> */}
                                        //             {/* <div >West Linton EH46 7DH, UK. - <span className="miles">415 Miles</span></div> */}
                                        //         </div>
                                        //     </div>
                                        // </a>
                                        <p>{index}</p>
                                 })} 
                            </div>
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