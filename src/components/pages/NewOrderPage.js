import React, { useState } from "react";
import axios from "axios";

import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const NewOrderPage = () => {
  const navigate = useNavigate();
  const { lang } = useGlobalContext();
  const { auth } = useAuth();
  const initialState = {
    name: "",
    phone: "",
    destination: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChangeForm = (e) => {
    setFormData((obj) => {
      return { ...obj, [e.target.name]: e.target.value, auth };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://backend-baigroupkz.herokuapp.com/orders/new-manual";
      const result = await axios.post(url, formData, {
        withCredentials: true,
      });
      if (result) {
        navigate("/myorders");
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    console.log(formData);
  };
  const handleClose = (e) => {
    e.preventDefault();
    console.log("CLOSE");
    setFormData(initialState);
    navigate("/myorders");
    // window.location.href = "/myorders";
  };
  return (
    <div className="new-order-container">
      <div className="form-header">
        <h2>
          {lang === "En"
            ? "New order"
            : lang === "Kz"
            ? "Жаңа тапсырыс"
            : "Новый заказ"}
        </h2>

        <FaTimes className="form-close-cross" onClick={handleClose} />
      </div>
      <form className="new-order-form" onChange={(e) => handleChangeForm(e)}>
        <label htmlFor="name" className="name-item">
          {lang === "En" ? "Name" : lang === "Kz" ? "Аты" : "Имя"}

          <input type="text" name="name" id="name" required={true} />
        </label>
        <label htmlFor="phone" className="phone-item">
          {lang === "En"
            ? "Phone"
            : lang === "Kz"
            ? "Телефон нөмірі"
            : "Номер телефона"}
          <input type="text" name="phone" id="phone" />
        </label>
        <label htmlFor="destination" className="destination-item">
          {lang === "En"
            ? "Destination"
            : lang === "Kz"
            ? "Турдың аты"
            : "Название тура"}

          <input type="text" name="destination" id="destination" />
        </label>
        <label htmlFor="comment" className="comment-item">
          {lang === "En"
            ? "Comment"
            : lang === "Kz"
            ? "Түсініктеме"
            : "Комментарий"}

          <input type="textarea" name="comment" id="comment" />
        </label>
        <button type="submit" className="save-btn" onClick={handleSubmit}>
          {lang === "En"
            ? "Save"
            : lang === "Kz"
            ? "Жазып алыңыз"
            : "Сохранить"}
        </button>
      </form>
    </div>
  );
};

export default NewOrderPage;
