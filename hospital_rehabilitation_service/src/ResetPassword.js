import React ,{ useState } from "react";
import Logo from "./img/logo.png";
import { Link, useNavigate } from "react-router-dom";


function ResetPassword(props) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    
    const forgetPassword = async () => {
        let result = await fetch('http://localhost:8080/ForgetPassword', {
            method: 'post',
            body: JSON.stringify({
                "email": email,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.result) {
            
            console.log("email sent")
        } else {
            alert("Error Occured");
        } 
        console.log(result);
    }

    const verifyOTP = async () => {
        // const url = "/ChangePassword?" + email;
        // window.location.href = url;
        let result = await fetch('http://localhost:8080/verifyOTP', {
            method: 'post',
            body: JSON.stringify({
                "otp": otp,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.result == "Success") {
            console.log("Verified")
            const url = "/ChangePassword?" + email
            window.location.href = url;
        } else {
            alert("Error Occured");
        } 
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
                        <button onClick={forgetPassword} type="submit" className="Loginbtn" >Generate OTP</button>
                        <br/><br/>
                        <label>OTP</label>
                        <input onChange={(e) => setOtp(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                        <button onClick={verifyOTP} type="submit" className="Loginbtn" >Verify OTP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ResetPassword;