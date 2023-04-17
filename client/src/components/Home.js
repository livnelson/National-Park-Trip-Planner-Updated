import { useState, useEffect } from "react"
// import UserTrips from './UserTrips'
import NattyParks from "./NattyParks"
import States from "./States"
import '../styles/Home.css'

function Home({ user }) {
  // const [parks, setParks] = useState([])
  const [states, setStates] = useState([])

  // useEffect(() => {
  //   fetch("https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=50&api_key=hQLUJV4Ctu79CYYc4YTuslyjKz36u5520OCQlXnF")
  //     .then((r) => r.json())
  //     .then((parksArray) => {
  //       console.log(parksArray.data)
  //       setParks(parksArray.data)
  //     })
  // }, [])

  let checkedActivities = []

  useEffect(() => {
    fetch('/get_states')
      .then((r) => r.json())
      .then((statesData) => {
        console.log(statesData)
        setStates(statesData)
      })
  }, [])




  return (
    <div className='home-page'>
      <div className='home-page-body'>
        <h1 className='heading'>Welcome, {user.first_name}!</h1>
        {/* <h3 className='subheading'>Your Saved Trips</h3> */}
      </div>
      <br />
      {/* <UserTrips user={user} parks={parks} checkedActivities={checkedActivities} /> */}
      <br />
      <h3 className='subheading'>What State Would You Like To Visit</h3>
      <States states={states} />
      {/* <h3 className='subheading'>California National Park Locations</h3>
      <p id="click-details">｛ <em>Click Park Name for Details</em> ｝</p> */}
      {/* <NattyParks parks={parks} user={user} /> */}
    </div>
  )
}

export default Home