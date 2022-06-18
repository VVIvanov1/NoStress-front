import React, { useState, useEffect } from "react";
import PasswordResetFetch from "./PasswordResetFetch";
import "./loginPage.css";

const PasswordReset = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    let mail = /\S+@\S+\.\S+/gm.test(email);
    if (!mail) {
      setIsError(true);
      setErrorMsg("invalid mail format");
    }
    try {
      const resetRequest = await PasswordResetFetch(email);

      console.log(resetRequest);
    } catch (error) {
      setErrorMsg(error.code);
      setIsError(true);
      console.error(error.code);
    }
  };
  return (
    <section className="login-container">
      {isError && <p>{errorMsg}</p>}
      <h3>Reset password</h3>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => handleChange(e)}
          />
        </label>

        <div className="reset-buttons">
          <button
            className="submit-reset-btn"
            onClick={(e) => handleResetSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default PasswordReset;
