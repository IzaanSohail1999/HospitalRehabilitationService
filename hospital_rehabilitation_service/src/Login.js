import "./css/style.css";
import "./css/bootstrap.css";
import Logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const axios = require('axios');
    const isValid = async()=>{
        let result = await fetch('http://localhost:8080/Login',{
            method:'post',
            body: JSON.stringify({
                "email":email,
                "password":pass
            }),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result.post){
            console.log('successful');
        }else{
            console.log('not successful');
        }
        console.log(result);
        
    }
    return (
        <div className="login-bg">
            <div id="wrap">
                <div className="loginParentContainer">
                    <div className="subContainer">
                        <div style={{textAlign:"center"}}>
                            <img src={Logo} alt="Stonestep Logo" />
                        </div>
                        <h2>Rehabilitation Service Provider Directory</h2>
                        <div className="loginForm">
                            <label for="">Email ID</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="text" className="inputborder-btm field" /><br /><br />
                            <label for="">Password</label>
                            <input onChange={(e)=>setPass(e.target.value)} type="password" className="field" /><br />
                            <Link className="forgot" to="#_">Forgot Password?</Link>

                            <button onClick={isValid} type="submit" className="Loginbtn " >Login</button>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Login;