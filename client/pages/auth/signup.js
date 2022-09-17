import React from "react";

const signup = () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input className="form-control"></input>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control"></input>
      </div>
      <br />
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default signup;
