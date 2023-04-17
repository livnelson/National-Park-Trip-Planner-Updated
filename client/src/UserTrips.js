import React, { useState, useEffect } from 'react'
import Trip from "./Trip"


function UserTrips({ user, parks, checkedActivities }) {

  const [trips, setTrips] = useState([])
  const [trip, setTrip] = useState({})
  const { user_id } = user
  console.log(user)

  useEffect(() => {
    fetch('/alltrips', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
      .then(res => {
        if (res.ok) {
          res.json().then(trips => {
            console.log(trips)
            setTrips(trips)
          })
        }
      })
  }, [])

  const needParkId = parks.map((park => park.id))

  const addTrip = (trip) => setTrips(current => [...current, trip])

  const updateTrip = (updatedTrip) => setTrips(current => {
    return current.map(trip => {
      if (trip.id === updatedTrip.id) {
        return updatedTrip
      } else {
        return trip
      }
    })
  })

  const deleteTrip = (id) => setTrips(current => current.filter(p => p.id !== id))

  const filteredTrips = trips.filter((trip) => {
    //console.log("user" + user)
    //console.log("user.id:" + user.id)
    if (trip.user_id === user.id) return true
  })

  const mappedTrips = filteredTrips.map((trip) => {
    //console.log(trip)
    return <Trip key={trip.id} updateTrip={updateTrip} trip={trip} deleteTrip={deleteTrip} user={user} apiPark_id={needParkId} checkedActivities={checkedActivities} />
  })

  return (
    <div className="trip-cards">
      {mappedTrips}
    </div>
  )
}

export default UserTrips