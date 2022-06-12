import React, { useRef, useEffect } from "react";
import Profile from "./Profile";
import { useGlobalContext } from "../../context";
import useAuth from "../../hooks/useAuth";

const Account = () => {
  const { showLink, expand, setExpand } = useGlobalContext();
  const { auth } = useAuth();
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
      {" "}
      {auth.name ? (
        <>
          <div className="avatar">
            <img src={`${auth.name.toLowerCase()}.jpg`} alt="" />
          </div>
          <div className="email">{auth.email}</div>
        </>
      ) : null}
      {expand && (
        <Profile
          position={accountHeight.current.getBoundingClientRect().bottom}
        />
      )}
    </div>
  );
};

export default Account;
