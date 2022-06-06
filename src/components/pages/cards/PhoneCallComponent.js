import React, { useState, useRef, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "../../../contact.css";
const PhoneCallComponent = ({ phone }) => {
  const [expandContact, setExpandContact] = useState(false);
  const [device, setDevice] = useState("");
  const [positionContact, setPositionContact] = useState({});
  const contactDeviceRef = useRef(null);

  useEffect(() => {
    let rect = contactDeviceRef.current.getBoundingClientRect();
    setPositionContact({
      left: rect.left + rect.width / 2 - 60,
      top: rect.bottom + 3,
    });
  }, []);

  const handleActivationCall = () => {
    setExpandContact(!expandContact);
    if (window.innerWidth > 900) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  };
  return (
    <>
      <div
        className="order-card-row-item phone main-theme-color"
        onClick={handleActivationCall}
        ref={contactDeviceRef}
      >
        <FaPhoneAlt className="main-theme-color" />
        {phone}
      </div>
      {expandContact && (
        <div className="contact-versions-container" style={positionContact}>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            style={{ color: "green" }}
          >
            <FaWhatsapp />
          </a>
          {device === "mobile" && (
            <a href={`tel:${phone}`}>
              <FaPhoneAlt />
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default PhoneCallComponent;
