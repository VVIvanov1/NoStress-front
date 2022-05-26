import React from 'react'
import {RiLogoutCircleLine} from 'react-icons/ri'

const LogOutBtn = ({setUser, lang}) => {
  return (
    <div className="security">
      <a href="#" onClick={() =>setUser(null)}>
        <RiLogoutCircleLine />
        <span>
        {
            lang === "En"? "Logout":
            lang === "Ru"? "Выйти":
            lang === "Kz"? "Шығу": "Сhiqish"
          }
        </span>
      </a>
    </div>
  )
}

export default LogOutBtn
