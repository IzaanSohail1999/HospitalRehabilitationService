import React from 'react';
import Logo from "../../img/logo.png";


function TermsAndCondition(props) {
    return (
            <div id="wrap">
                <div className="loginParentContainer">
                    <div className="subContainer">
                        <div style={{ textAlign: "center" }}>
                            <br/><br/>
                            <img src={Logo} alt="Stonestep Logo" />
                            <br/><br/>
                            <h1>Terms & Condition</h1>
                            <h5>This is the Terms & Condition page. You may modify the following file to customize its <br/> content:</h5>
                        </div>
                           

                    </div>
                </div>
            </div>
    );
}

export default TermsAndCondition;