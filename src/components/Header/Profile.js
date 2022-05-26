import React from "react";

const Profile = () => {
  return (
    <div className="profile">
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
