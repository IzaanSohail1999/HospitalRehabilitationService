import React ,{ useState } from "react";
import { useContext } from "react";
import { HospitalContext } from '../../context/HospitalContext'
import Logo from "../../img/logo.png";
import { Link, useNavigate, NavLink } from "react-router-dom";


function ResetPassword(props) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const {  forgetPassword, verifyOTP } = useContext(HospitalContext);
    
    function forgotPass(){
        forgetPassword(email);
    }
    
    function verify(){
        verifyOTP(otp,email);
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
                        <label>Email ID</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                        <button onClick={forgotPass} type="submit" className="Loginbtn" >Generate OTP</button>
                        <br/><br/>
                        <label>OTP</label>
                        <input onChange={(e) => setOtp(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                        <button onClick={verify} type="submit" className="Loginbtn" >Verify OTP</button>
                        <div style={{ textAlign: "center" }}>
                            <Link className="forgot" to="/Login">Back To Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ResetPassword;