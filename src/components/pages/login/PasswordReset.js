import React, { useState, useEffect } from "react";
import PasswordResetFetch from "./PasswordResetFetch";
import "./loginPage.css";

const PasswordReset = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setIsError(false);
    setErrorMsg("");
    setEmail({ [e.target.name]: e.target.value });
  };
  const handleResetSubmit = async (e) => {
    e.preventDefault();

    let mailCheck = email.email.endsWith("@baigroupkz.com");
    if (!mailCheck) {
      setIsError(true);
      setErrorMsg(
        "Неверный формат email. Доступ в систему только по корпоративной почте."
      );
    } else {
      try {
        const resetRequest = await PasswordResetFetch(email);

        setIsError(true);
        setSuccess(true);
        setEmail({});
        setErrorMsg(resetRequest.data.message);
      } catch (error) {
        setErrorMsg(error.response.data.message);
        setIsError(true);
        console.error(error);
      }
    }
  };
  return (
    <section className="login-container">
      {isError && <p>{errorMsg}</p>}
      {success ? null : (
        <>
          <h3>Смена пароля</h3>

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
        </>
      )}
    </section>
  );
};

export default PasswordReset;
