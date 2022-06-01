import React, { useRef, useState } from "react";
import team from "../../team";
import { FaShareSquare } from "react-icons/fa";
import { useGlobalContext } from "../../context.js";

const ShareButton = () => {
  const { showShareModal, setShowShareModal } = useGlobalContext();
  const { setSharedUser } = useGlobalContext();
  const [hoverIn, setHoverIn] = useState(false);
  const [position, setPosition] = useState(null);
  const shareBtnRef = useRef(null);

  const handleHover = (e) => {
    setHoverIn(!hoverIn);
    let rect = shareBtnRef.current.getBoundingClientRect();
    let center = rect.left - rect.width / 2;
    let bottom = rect.bottom + 20;
    let styleDD = { left: `${center}px`, top: `${bottom}px` };
    setPosition(styleDD);
  };
  const handleSelection = (e) => {
    setSharedUser(e.target.textContent);
    setHoverIn(!hoverIn);
    setShowShareModal(!showShareModal);
  };

  return (
    <>
      <button
        className="share-order manager-btn "
        ref={shareBtnRef}
        onClick={handleHover}
      >
        <FaShareSquare /> Share
      </button>
      {hoverIn && (
        <div
          className="team-dropdown"
          style={{ left: position.left, top: position.top }}
        >
          <ul>
            {team.map((member) => {
              let { id, name, image } = member;
              return (
                <li
                  key={id}
                  className="color-grey"
                  onClick={(e) => handleSelection(e)}
                >
                  <img src={image} />
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ShareButton;
