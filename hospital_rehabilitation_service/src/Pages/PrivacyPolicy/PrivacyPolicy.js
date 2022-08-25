import React from 'react';
import Logo from "../../img/logo.png";

function PrivacyPolicy(props) {
    return (
        <div id="wrap">
        <div className="loginParentContainer">
            <div className="subContainer">
                <div style={{ textAlign: "center" }}>
                    <br/><br/>
                    <img src={Logo} alt="Stonestep Logo" />
                    <br/><br/>
                    <h1>Privacy Policy</h1>
                    <h5>This is the Privacy Policy page. You may modify the following file to customize its <br/> content:</h5>
                </div>
                   

            </div>
        </div>
    </div>
    );
}

export default PrivacyPolicy;