import React from "react";
import "../../Modal.css";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const ShareModal = () => {
  const { sharedUser, showShareModal, setShowShareModal } = useGlobalContext();

  return (
    <div
      className="modal-overlay"
      onClick={() => setShowShareModal(!showShareModal)}
    >
      <div className="modal-container">
        <h4>Confirm sharing this order with {sharedUser}?</h4>
        <button
          className="confirm-modal-btn"
          onClick={() => setShowShareModal(!showShareModal)}
        >
          confirm
        </button>
        <button
          className="close-modal-btn"
          onClick={() => setShowShareModal(!showShareModal)}
        >
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
