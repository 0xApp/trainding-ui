import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../store";
import "./login.css";
const Login = () => {
  const { profile, loggedIn } = useStoreState((store) => store.profileStore);
  const { login } = useStoreActions((store) => store.profileStore);
    const [user, setUser] = useState("");
    
    const navigate = useNavigate();

  const handleLogin = () => {
    if (user) {
      login(user)
        .then((e) => {
            alert(JSON.stringify(e));
            navigate('/search');
        })
        .catch((e) => {
          alert(JSON.stringify(e));
        });
      setUser("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  return (
    <div className="login-form">
      <form>
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={user}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
        <div className="clearfix">
          <label className="float-left form-check-label">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="float-right">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center">
        {/* <a href="#">{profile === null ? "Not Logged in" : "Logged In"}</a> */}
        {loggedIn && <span>Logged In</span>}
        {!loggedIn && <span>Not In</span>}
      </p>
    </div>
  );
};

export default Login;
