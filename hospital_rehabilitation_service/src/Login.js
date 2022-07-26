import "./css/style.css";
import "./css/bootstrap.css";
import Logo from "./img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from 'universal-cookie';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const cookies = new Cookies();

    const isValid = async () => {
        let result = await fetch('http://localhost:8080/Login', {
            method: 'post',
            body: JSON.stringify({
                "email": email,
                "password": pass
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.auth) {
            cookies.set('jwtoken', result.auth);
            
            window.location.href = "/?" + result.result.role;
        } else {
            alert(result.result);
        } 
        console.log(result.result.role);
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