import React from "react";
import "../../Modal.css";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const ShareModal = () => {
  const {
    sharedUser,
    setSharedUser,
    showShareModal,
    setShowShareModal,
    sharedPage,
    setSharedPage,
    data,
  } = useGlobalContext();
  const handleShare = () => {
    data.map((order) => {
      if (order._id.$oid === sharedPage.id) {
        order.status = "in progress";
      }
    });
    setShowShareModal(!showShareModal);
    setSharedUser({});
    setSharedPage({});
  };
  const handleClose = () => {
    setShowShareModal(!showShareModal);
    setSharedUser({});
  };
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container">
        <h4>
          Confirm sharing order "{sharedPage.page}" with {sharedUser}?
        </h4>
        <button className="confirm-modal-btn" onClick={handleShare}>
          confirm
        </button>
        <button className="close-modal-btn" onClick={handleClose}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
