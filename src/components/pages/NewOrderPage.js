import React, { useState } from "react";
import "../../newOrder.css";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
const NewOrderPage = () => {
  // const lang = window.localStorage.getItem("language");
  const { lang } = useGlobalContext();
  const initialState = {
    name: "",
    phone: "",
    destination: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChangeForm = (e) => {
    setFormData((obj) => {
      return { ...obj, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
    console.log(formData);
  };
  const handleClose = (e) => {
    e.preventDefault();
    console.log("CLOSE");
    setFormData(initialState);
    window.location.href = "/myorders";
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
