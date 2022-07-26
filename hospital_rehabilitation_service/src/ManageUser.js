import React from 'react';
import Logo_inner from "./img/logo_inner.png";
import User_icon from "./img/user_icon.png";

function ManageUser(props) {
    return (
        <div>
            <div id="wrap">
                <div className="top">
                    <div className="head">
                        <div className="container">
                            <div className="row">
                                <div className="logo push-left">
                                    <img src={Logo_inner} />
                                </div>
                                <h3>St George’s Hospital</h3>
                                <div className="navigation">
                                    <div className="userLnk">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown"> <img src={User_icon} /> Super Admin
                                                <span className="caret"></span></button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Log Out</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="actionBtn">
                                        <div className="dropdown">
                                            <button className="btn btn-prm dropdown-toggle" type="button" data-toggle="dropdown">Actions
                                                <span className="caret"></span></button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Manage Users</a></li>
                                                <li><a href="#">Mange Services</a></li>
                                                <li><a href="#">Manage Hospitals</a></li>
                                                <li><a href="#">Change Requestsv</a></li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="pgbody">


                    <section className="contentBg">
                        <div className="container">

                            <div className="row pgHead">
                                <h3 className="pgTitle">Manage User</h3>
                                <a data-toggle="modal" data-target="#exampleModal" href="#_" className="actionBtn">Add User</a>
                            </div>
                            <h3></h3>

                            <div className="row pgsection">

                                <table className="table tblSec">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>

                                            <th scope="col" className="lastTblele">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" className="InputFrm" /></td>
                                            <td><input type="text" className="InputFrm" /></td>
                                            <td><input type="text" className="InputFrm" /></td>
                                            <td><div className="select-style_grid">
                                                <select>
                                                    <option value="volvo">Services</option>
                                                    <option value="saab">Name</option>

                                                </select></div></td>
                                            <td className="lastTblele"></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td><span className="openSide">OpenSidebar</span></td>
                                            <td className="lastTblele"><a data-toggle="modal" data-target="#myModal" className="icon edit editIco"></a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td className="lastTblele"></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td className="lastTblele"></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td className="lastTblele"></td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </section>
                </div>
                <div className="footer">
                    © Cardinal Management
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