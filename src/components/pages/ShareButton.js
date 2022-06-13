import React, { useRef, useState, useEffect } from "react";
import team from "../../team";
import { FaShareSquare } from "react-icons/fa";
import { useGlobalContext } from "../../context.js";

const ShareButton = ({ id, page }) => {
  const {
    showShareModal,
    setShowShareModal,
    setSharedPage,
    setSharedUser,
  } = useGlobalContext();
  // const { setSharedUser } = useGlobalContext();
  const [hoverIn, setHoverIn] = useState(false);
  const [position, setPosition] = useState(null);
  const [teamObj, setTeam] = useState({});
  const shareBtnRef = useRef(null);

  useEffect(() => {
    setTeam(team);
  }, []);

  const handleHover = () => {
    setHoverIn(!hoverIn);
    let rect = shareBtnRef.current.getBoundingClientRect();
    let center = rect.left - rect.width / 2;
    let bottom = rect.bottom + 20;
    let styleDD = { left: `${center}px`, top: `${bottom}px` };
    setPosition(styleDD);
  };
  const handleSelection = (e) => {
    console.log("selected assignee");
    const userId = team.find((u) => u.name === e.target.textContent);
    setSharedUser(e.target.textContent);
    setHoverIn(!hoverIn);
    setShowShareModal(!showShareModal);
    setSharedPage({ id, page, userId });
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
            {teamObj.map((member) => {
              let { id, name, image } = member;
              return (
                <li
                  key={name}
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
