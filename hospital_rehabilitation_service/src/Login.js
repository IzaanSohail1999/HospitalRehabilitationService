import "./css/style.css";
import "./css/bootstrap.css";
import Logo from "./img/logo.png";
import { useState, useContext } from "react";
import { HospitalContext } from '../src/context/HospitalContext'
import { Link, useNavigate } from "react-router-dom";


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
                <div className="loginParentContainer">
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
            </div>
        </div>
    );
}

export default Login;