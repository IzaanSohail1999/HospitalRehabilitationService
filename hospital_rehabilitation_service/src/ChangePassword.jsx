import React, {useState, useEffect} from 'react';
import Logo from "./img/logo.png";
import axios from 'axios';



function ChangePassword(props) {
    const queryString = window.location.search;
    let text = queryString.split("?")
    const email = text[1]
    const [password, setPassword] = useState('');
    const [conpass, setConnpass] = useState('');
    const [fetchEmail, setFetchEmail] = useState('');
    const [post, setPost] = useState('');
    
    async function FetchData(){
        await axios.get(`http://localhost:8080/getUser?email=${email}`)
        .then((res) => {
            setFetchEmail(res.data.user[0].email)
            setPost(res.data.user[0].post)
            console.log(fetchEmail)
        })
      }

    useEffect(() => {
        FetchData();
      }, []);

      

    async function test(){
        if(password == conpass){
            console.log("Confirm")
        }
        else{
            console.log("Reject")
        }     
        await axios.put(`http://localhost:8080/updatePassword`, {
            email: fetchEmail,
            password: password,
            post: post
        })
        .then(function(response){
            console.log(response.data);
            window.location.href = "/Login";
        })       

        
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
                        <input type="email" value= {fetchEmail} className="inputborder-btm field" /><br /><br />
                        <label>Post</label>
                        <input type="email" value= {post} className="inputborder-btm field" /><br /><br />
                        <label>Input Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="inputborder-btm field" /><br /><br />
                        <label>Confirm Password</label>
                        <input onChange={(e) => setConnpass(e.target.value)} type="password" className="inputborder-btm field" /><br /><br />
                        <button onClick={test} type="submit" className="Loginbtn" >Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ChangePassword;