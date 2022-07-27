import React, { useState, createContext } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

export const HospitalContext = createContext();

export default function HospitalProvider({ children }) {
    const cookies = new Cookies();
    let navigate = useNavigate();
    const [role, setRole] = useState("");

    const getRole = async() => {
        console.log(role);
    }

    const Login = async (email, pass) => {
        console.log(email,pass)
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
            let post = result.result.role 
            console.log(post)
            setRole(post)
            console.log(role)
            navigate('/');        
        } else {
            alert(result.result);
        } 
    }

    const forgetPassword = async (email) => {
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

    const Logout = async () => {   
        setRole("")
        navigate("/Login")
    } 
    
    const verifyOTP = async (otp,email) => {
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
        if (result.result === "Success") {
            console.log("Verified")
            const url = "/ChangePassword?" + email
            navigate(url);        
        } else {
            alert("Error Occured");
        } 
    }
    
  

    async function ChangePassword(email, password, confirmpass){
        if(password === confirmpass){
            console.log("Confirm")
        }
        else{
            console.log("Reject")
        }     
        await fetch(`http://localhost:8080/updatePassword`, {
            method: 'put',   
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            navigate("/Login");
        })            
    }

    return(
        <HospitalContext.Provider
        value={{
            Login,
            role,
            getRole,
            forgetPassword,
            verifyOTP,
            Logout,
            ChangePassword
        }}>
            {children}
        </HospitalContext.Provider>
    )
}