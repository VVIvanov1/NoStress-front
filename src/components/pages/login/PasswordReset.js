import React from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <section className="login-container">
      <h3>Reset password</h3>
      <form>
        <label>
          Login:
          <input type="text" name="login" id="login" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" id="password" required />
        </label>
        <div className="reset-buttons">
          <button className="submit-reset-btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default PasswordReset;
