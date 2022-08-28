import React, { useState, useEffect, useContext } from 'react';

function ContactUs(props) {
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    async function sendEmail(){
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(body);
        let result = await fetch('http://localhost:8080/contactUs/ContactUs', {
            method: 'post',
            body: JSON.stringify({
                "name": name,
                "email": email,
                "subject": subject,
                "body": body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.result) {
            console.log("email sent")
            window.location.href = "/"
        } else {
            alert("Error Occured");
        } 
        console.log(result);
    }

    return (
        <div>
            <div className="bdHead">
                <div className="container">
                    <div className="row">
                        <div className="row col-md-6 col-xs-12">
                            <ul className="bdcrumb">
                                <li><a href="/">Home</a></li>
                                <li className="active">Contact us</li>
                            </ul>                
                        </div>
                    </div>
                    <div className="content" id="main-content">
                        <div className="site-contact">
                            <h1>Contact us</h1>
                            <p>If you have business inquiries or other questions, please fill out the following form to contact us. Thank you.</p>
                            <div className="row">
                                <div className="col-lg-5">
                                    <form id="contact-form">
                                        <input type="hidden" name="_csrf" value="XMKqIeXOY4L9xB_mD3YIlfwMkILzBpciu0XKt8LyWYINi8xW3P88xYi0c7d9R0LKy1nir7RN_VXSfJnT-pgvzg=="/>
                                        <div className="form-group field-contactform-name required has-error">
                                            <label className="control-label" for="contactform-name">Name</label>
                                            <input type="text" onChange={(e) => setname(e.target.value)} id="contactform-name" className="form-control" name="ContactForm[name]" autofocus="" aria-required="true" aria-invalid="true"/>
                                            <p className="help-block help-block-error">Name cannot be blank.</p>
                                        </div>
                                        <div className="form-group field-contactform-email required">
                                            <label className="control-label" for="contactform-email">Email</label>
                                            <input type="text" onChange={(e) => setEmail(e.target.value)} id="contactform-email" className="form-control" name="ContactForm[email]" aria-required="true"/>
                                            <p className="help-block help-block-error"></p>
                                        </div>
                                        <div className="form-group field-contactform-subject required">
                                            <label className="control-label" for="contactform-subject">Subject</label>
                                            <input type="text" onChange={(e) => setSubject(e.target.value)} id="contactform-subject" className="form-control" name="ContactForm[subject]" aria-required="true"/>
                                            <p className="help-block help-block-error"></p>
                                        </div>
                                        <div className="form-group field-contactform-body required">
                                            <label className="control-label" for="contactform-body">Body</label>
                                            <textarea id="contactform-body" onChange={(e) => setBody(e.target.value)} className="form-control" name="ContactForm[body]" rows="6" aria-required="true"></textarea>
                                            <p className="help-block help-block-error"></p>
                                        </div>
                                        {/* <div className="form-group field-contactform-verifycode">
                                            <label className="control-label" for="contactform-verifycode">Verification Code</label>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <img id="contactform-verifycode-image" src="/cardinal/web/site/captcha?v=63076535292ca0.18102228" alt=""/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" id="contactform-verifycode" className="form-control" name="ContactForm[verifyCode]"/>
                                                </div>
                                            </div>
                                            <p className="help-block help-block-error"></p>
                                        </div> */}
                                    </form>
                                        <div>
                                            <button className="btn btn-prm" onClick={sendEmail}>Submit</button> 
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;