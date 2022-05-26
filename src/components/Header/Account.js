import React, {useState} from 'react'
import Profile from './Profile'

const myProfile = {
  myCurrentOrders: 17,
  myClosedOrders: 154
}

const Account = ({user}) => {
  const [expand, setExpand] = useState(false)
  const expandProfile = () =>{
    setExpand(true)
  }
  const collapseProfile = () => {
    setExpand(false)
  }


  return (
    <div className="account" onMouseEnter={()=>expandProfile()} onMouseLeave={()=>collapseProfile()}>
          <div className="avatar">
            <img src="avatar.jpg" alt=""/>
          </div>
          <div className="email">{user.email}</div>
          
          {
            expand? <Profile/>:""
          }
          
        </div>
  )
}

export default Account
