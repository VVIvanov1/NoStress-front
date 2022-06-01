import React, { useRef, useState, useEffect } from "react";
import team from "../../team";
import { FaShareSquare } from "react-icons/fa";

const ShareButton = () => {
  const [hoverIn, setHoverIn] = useState(false);
  const [position, setPosition] = useState(null);
  const shareBtnRef = useRef(null);

  const handleHover = (e) => {
    setHoverIn(!hoverIn);
    let rect = shareBtnRef.current.getBoundingClientRect();
    console.log(rect);
    let center = rect.left - rect.width / 2;
    console.log((rect.right + rect.left) / 2);

    let bottom = rect.bottom + 20;
    let styleDD = { left: `${center}px`, top: `${bottom}px` };
    setPosition(styleDD);
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
                <li key={id} className="color-grey">
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
