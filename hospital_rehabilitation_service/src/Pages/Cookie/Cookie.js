import React from 'react';
import Logo from "../../img/logo.png";


function Cookie(props) {
    return (
        <div id="wrap">
        <div className="loginParentContainer">
            <div className="subContainer">
                <div style={{ textAlign: "center" }}>
                    <br/><br/>
                    <img src={Logo} alt="Stonestep Logo" />
                    <br/><br/>
                    <h1>Cookie  Policy</h1>
                    <h5>This is the Cookie Policy page. You may modify the following file to customize its <br/> content:</h5>
                </div>
                   

            </div>
        </div>
    </div>
    );
}

export default Cookie;