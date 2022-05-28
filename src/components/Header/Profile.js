import React from "react";

const Profile = ({ position }) => {
  const style = { top: position };

  return (
    <div className="profile" style={style}>
      <ul>
        <li>
          <a href="#">
            My current orders <span>76</span>
          </a>
        </li>
        <li>
          <a href="#">
            My closed orders <span>176</span>
          </a>
        </li>
        <li>
          <a href="#">
            Orders i can take <span>176</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
