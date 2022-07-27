import React, {useState, useContext} from 'react';
import Logo from "./img/logo.png";
import { HospitalContext } from '../src/context/HospitalContext'


function ChangePassword() {
    const {ChangePassword} = useContext(HospitalContext);
    const queryString = window.location.search;
    let text = queryString.split("?")
    const email = text[1]
    const [confirmpass, setConfirmpass] = useState('');
    const [password, setPassword] = useState('');

    function changePass(){
        ChangePassword(email, password, confirmpass)
    } 

    return (
        <div className="login-bg">
        <div id="wrap">
            <div className="loginParentContainer">
                <div className="subContainer">
                    <div style={{ textAlign: "center" }}>
                        <img src={Logo} alt="Stonestep Logo" />
                        <h2>Rehabilitation Service Provider Directory</h2>
                    </div>
                    <div className="loginForm">
                        <label>Email</label>
                        <input type="email" value= {email} className="inputborder-btm field" /><br /><br />
                        <label>Input Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="inputborder-btm field" /><br /><br />
                        <label>Confirm Password</label>
                        <input onChange={(e) => setConfirmpass(e.target.value)} type="password" className="inputborder-btm field" /><br /><br />
                        <button onClick={changePass} type="submit" className="Loginbtn" >Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ChangePassword;