import React, { useEffect, useState } from 'react';

export const Login = (toggleHome) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    console.log(userName);
    console.log(email);
    // Add logic for handling login, e.g., making an API call
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      submitLogin(toggleHome);
    }, 5000); 
  
    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timerId);
  }, []);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center p-5 dubai">
        <form className="border p-3 dubaichild" action="https://formspree.io/f/xzblldqv"
    method="POST">
          <h2>LOG-IN</h2>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name:</label>
            <input
            name='Name'
              className="form-control"
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" >Email address</label>
            <input
            name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone-Number</label>
            <input
            name='Mobile-no'
              className="form-control"
              type="text"
              placeholder="Enter Phone-Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
            name='password'
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={submitLogin}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
