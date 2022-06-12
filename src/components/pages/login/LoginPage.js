import React from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";
const LoginPage = () => {
  return (
    <section className="login-container">
      <h3>Login</h3>
      <form>
        <label>
          Login:
          <input type="text" name="login" id="login" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" id="password" required />
        </label>
        <div className="login-buttons">
          <Link to="/register">
            <p>Register</p>
          </Link>
          <button className="submit-login-btn">Submit</button>
        </div>
        <Link to="/password-reset" className="forgot-password">
          <p>Forgot password?</p>
        </Link>
      </form>
    </section>
  );
};

export default LoginPage;
