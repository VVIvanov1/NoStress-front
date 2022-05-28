import React, { useState, useRef, useEffect } from "react";
import Profile from "./Profile";

const myProfile = {
  myCurrentOrders: 17,
  myClosedOrders: 154,
};

const Account = ({ user, showLink, accountPos }) => {
  const [expand, setExpand] = useState(false);
  const [pose, setPose] = useState(0);
  const accountHeight = useRef(null);

  useEffect(() => {
    if (showLink) {
      accountHeight.current.style.height = "auto";
    } else {
      accountHeight.current.style.height = "0px";
    }
  });

  const expandProfile = () => {
    setExpand(true);
  };
  const collapseProfile = () => {
    setExpand(false);
  };

  return (
    <div
      ref={accountHeight}
      className="account"
      onMouseEnter={() => expandProfile()}
      onMouseLeave={() => collapseProfile()}
    >
      <div className="avatar">
        <img src="avatar.jpg" alt="" />
      </div>
      <div className="email">{user.email}</div>

      {expand && (
        <Profile
          position={accountHeight.current.getBoundingClientRect().bottom}
        />
      )}
    </div>
  );
};

export default Account;
