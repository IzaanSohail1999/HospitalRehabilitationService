import "../../css/style.css";
import "../../css/bootstrap.css";
import Logo from "../../img/logo.png";
import { useState, useContext } from "react";
import { HospitalContext } from '../../context/HospitalContext'
import { Link, useNavigate, NavLink } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { Login } = useContext(HospitalContext);

    function isValid() {
        Login(email, pass)
    }

    return (
        <div className="login-bg">
            <div id="wrap">
                <div className="loginParentContainer" style={{height: "70vh"}}>
                    <div className="subContainer">
                        <div style={{ textAlign: "center" }}>
                            <img src={Logo} alt="Stonestep Logo" />
                            <h2>Rehabilitation Service Provider Directory</h2>
                        </div>
                        <div className="loginForm">
                            <label for="">Email ID</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                            <label for="">Password</label>
                            <input onChange={(e) => setPass(e.target.value)} type="password" className="field" /><br />
                            <div style={{ textAlign: "center" }}>
                                <Link className="forgot" to="/ResetPassword">Forgot Password?</Link>
                            </div>
                            <button onClick={isValid} type="submit" className="Loginbtn" >Login</button>
                        </div>

                    </div>
                </div>
                <div style={{textAlign: "center", fontSize: "13px"}}>
                    <p style={{color:"black"}}>
                        This system is provided by Cardinal Management Ltd for use by hospitals who have implemented the Major Trauma <br/> 
                        Signposting Partnership (MTSP) service. If you would like to know more about the Rehabilitation Service Provider Directory <br/> 
                        or the MTSP please contact us at <a href="https://info@cardinal-ltd.co">info@cardinal-ltd.co</a>.
                    </p>
                    <p style={{color:"black" , fontSize: "13px"}}>
                    Copyright 2019 Cardinal Management Limited | All Rights Reserved | <a href="/TermsAndConditions"> Terms and Conditions </a>| <a href="/PrivacyPolicy"> Privacy Policy </a> | <a href="Cookie"> Cookie Policy </a>                   </p>
                </div>
            </div>
        </div>
    );
}

export default Login;