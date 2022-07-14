import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
const Login = () =>{
    return(
<div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <a href="#" className="float-right">Forgot Password?</a>
        </div>        
    </form>
    <p className="text-center"><a href="#">Create an Account</a></p>
</div>
    )
}

export default Login;