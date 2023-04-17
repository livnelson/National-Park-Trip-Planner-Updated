import React, { useState } from 'react'
import ParkActivities from './ParkActivities';

function CreateTrip({ user, fullname, id, activityNames, checkedActivities }) {
  const [errors, setErrors] = useState([])
  const [trip, setTrip] = useState({})
  const [userActivities, setUserActivities] = useState({})
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [tripActivities, setTripActivities] = useState('')

  console.log(id)

  function handleStartDateChange(e) {
    setStartDate(e.target.value)
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value)
  }

  async function handleSaveTrip(e) {
    e.preventDefault()

    console.log(user)

    const configTrip = {
      fullname,
      start_date: startDate,
      end_date: endDate,
      user_id: user.id,
      activities: checkedActivities.join(', ')
    }

    console.log(configTrip)


    fetch(`/newtrip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(configTrip)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(trip => {
            console.log(trip)
            setTrip(trip)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  return (
    <div>
      <h3>Create a Trip</h3>
      <div className="user-card">
        <div className="user-form">
          <form onSubmit={handleSaveTrip}>
            <h2 className="park-name-create">{fullname}</h2>
            <br />
            <input
              className="user-input-field"
              name="start_date"
              type="date"
              value={startDate}
              placeholder="Enter Start Date"
              onChange={handleStartDateChange}
              required
            />
            <br />
            <input
              className="user-input-field"
              name="end_date"
              type="date"
              value={endDate}
              placeholder="Enter End Date"
              onChange={handleEndDateChange}
              required
            />
            <br />
            {activityNames.map(activity => <ParkActivities key={trip.id} activity={activity} checkedActivities={checkedActivities} />)}
            <br />
            <button className="button" type="submit" >Save Your Trip</button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default CreateTrip