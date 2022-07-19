import "./css/style.css";
import "./css/bootstrap.css";
import Logo from "./img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
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
        if (result.post) {
            navigate('/');
        } else {
            alert(result.result);
        }
        console.log(result);

    }
    return (
        <div className="login-bg">
            <div id="wrap" style={{ marginTop: "10vw" }}>
                <div className="loginParentContainer">
                    <div className="subContainer">
                        <div style={{ textAlign: "center" }}>
                            <img src={Logo} alt="Stonestep Logo" />
                            <h4>Rehabilitation Service Provider Directory</h4>
                        </div>
                        <div className="loginForm">
                            <label for="">Email ID</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                            <label for="">Password</label>
                            <input onChange={(e) => setPass(e.target.value)} type="password" className="field" /><br />
                            <div style={{ textAlign: "center" }}>
                                <Link className="forgot" to="#_">Forgot Password?</Link>
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