import React, { useState } from "react";
import { Link,Redirect } from "react-router-dom";
import axios from "axios";
  
  export default function Register(props) {
    
  document.title = "register";

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [redirect, setredirect] = useState(false)
  let submit = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      cpassword === ""
    ) {
      alert("Email, Name or Password  is Empty");
    } else if (!password === cpassword) {
      alert("Passwords not Matched");
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const url = "http://localhost/New folder/react-php/registration.php";
      axios
        .post(url, formData)
        .then((res) => res.data)
        .then((result) => {
          if (result === true) {
            setredirect(true)
            setusername("");
            setpassword("");
            props.setShowalrt(true);
            setTimeout(() => {
              props.setShowalrt(false);
            }, 4000);
          } else if (result === false) {
            alert("this username already used try another username");
          } else if (result === "some error occurred") {
            alert("some error occurred please try again letter");
          }
        })
        .catch(() => {
          alert("some error accrued please try again");
        });
    }
  };
    return (
      <>
      {redirect===true && <Redirect to="/login" />}
      <main id="main" className="main-site left-sidebar">
        <div className="container">
          <div className="wrap-breadcrumb">
            <ul>
              <li className="item-link">
                <Link to="/" className="link">
                  home
                </Link>
              </li>
              <li className="item-link">
                <span>Register</span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
              <div className=" main-content-area">
                <div className="wrap-login-item ">
                  <div className="register-form form-item ">
                    <div className="frm">
                      <fieldset className="wrap-title">
                        <h3 className="form-title">Create an account</h3>
                        <h4 className="form-subtitle">Personal infomation</h4>
                      </fieldset>
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-reg-lname">Name*</label>
                        <input
                          type="text"
                          id="frm-reg-lname"
                          name="reg-lname"
                          placeholder="Name*"
                          value={username}
                          onChange={(e) => setusername(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-reg-email">Email Address*</label>
                        <input
                          type="email"
                          id="frm-reg-email"
                          name="reg-email"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="wrap-functions ">
                        <label className="remember-field">
                          <input
                            name="newletter"
                            id="new-letter"
                            value="forever"
                            type="checkbox"
                          />
                          <span>Sign Up for Newsletter</span>
                        </label>
                      </fieldset>
                      <fieldset className="wrap-title">
                        <h3 className="form-title">Login Information</h3>
                      </fieldset>
                      <fieldset className="wrap-input item-width-in-half left-item ">
                        <label htmlFor="frm-reg-pass">Password *</label>
                        <input
                          type="text"
                          id="frm-reg-pass"
                          name="reg-pass"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="wrap-input item-width-in-half ">
                        <label htmlFor="frm-reg-cfpass">Confirm Password *</label>
                        <input
                          type="text"
                          id="frm-reg-cfpass"
                          name="reg-cfpass"
                          placeholder="Confirm Password"
                          value={cpassword}
                          onChange={(e) => setcpassword(e.target.value)}
                        />
                      </fieldset>
                      <button className="btn" onClick={() => submit()}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </>
    )
  }
  
