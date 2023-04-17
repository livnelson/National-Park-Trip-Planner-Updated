import React from "react"
import { Link, useNavigate } from "react-router-dom"
import '../styles/Navbar.css'

function Navbar({ user, setIsLoggedIn }) {
  const navigate = useNavigate()

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
    console.log("User logged out")
    navigate("/")
    setIsLoggedIn(false)
  }

  return (
    <div className="navbar">
      <img src='https://res.cloudinary.com/dovuffpii/image/upload/v1681670953/projects/road-trip-logo-white_qqpszr.png' alt='logo' />
      <div className='navbar-menu'>
        <img
          className="avatar"
          src={user.profile_img}
          alt={user.username}
        />
        <Link
          to="/"
          onClick={handleLogout}
          className="nav-link"
        > Log Out
        </Link>
      </div>
    </div>
  )
}

export default Navbar