import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import CreateUser from './CreateUser'
import Home from './Home'
import Navbar from "./Navbar"
// import StateParks from "./StateParks"
import '../styles/App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path={`/users/${user.id}`} element={<>
          <Navbar user={user} setIsLoggedIn={setIsLoggedIn} />
          <Home user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </>}
        />
        {/* <Route path={`state_park_details`} element={<StateParks />} /> */}
      </Routes>
    </div>
  )
}

export default App