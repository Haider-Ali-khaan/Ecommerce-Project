import axios from "axios";
import React, { useState } from "react";
import { Link,Redirect } from "react-router-dom";
  
  export default function Login(props) {
    
  document.title = "login";
  const [name, setname] = useState("");
  const [pswd, setpswd] = useState("");
  let logs = () => {
    if (name === "" || pswd === "") {
      alert("Email or Password is empty");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("password", pswd);
      const url = "login.php";
      axios
        .post(url, formData)
        .then((res) => res.data)
        .then((result) => {
          if (result === true) {
            props.setlogin(true);
            props.setLogdlrt(true);
            setTimeout(() => {
              props.setLogdlrt(false);
            }, 4000);
            setname("");
            setpswd("");
          } else if (result === false) {
            alert("user name or password did not matched");
          }
        })
        .catch((err) => {
          alert("some error accurred please try again letter");
        });
    }
  };
    return (
      <>
      {props.setAlert("showalrtforlogin")}
      {props.login===true && <Redirect to="/shop"/>}
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
                <span>login</span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
              <div className=" main-content-area">
                <div className="wrap-login-item ">
                  <div className="login-form form-item form-stl">
                    <div className="frm">
                      <fieldset className="wrap-title">
                        <h3 className="form-title">Log in to your account</h3>
                      </fieldset>
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-login-uname">Email Address:</label>
                        <input
                          type="text"
                          id="frm-login-uname"
                          name="email"
                          placeholder="Type your email address"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-login-pass">Password:</label>
                        <input
                          type="password"
                          id="frm-login-pass"
                          name="pass"
                          placeholder="************"
                          value={pswd}
                          onChange={(e) => setpswd(e.target.value)}
                        />
                      </fieldset>
  
                      <fieldset className="wrap-input">
                        <label className="remember-field">
                          <input
                            className="frm-input "
                            name="rememberme"
                            id="rememberme"
                            value="forever"
                            type="checkbox"
                          />
                          <span>Remember me</span>
                        </label>
                        <Link
                          className="link-function left-position"
                          to="#"
                          title="Forgotten password?"
                        >
                          Forgotten password?
                        </Link>
                      </fieldset>
                      <button className="btn" onClick={() => logs()}>
                        Submit
                      </button>
                        <Link to="/register" className="btn-createAcnt">
                          <button className="btn btn2">
                            Create New Account
                          </button>
                        </Link>
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
  
