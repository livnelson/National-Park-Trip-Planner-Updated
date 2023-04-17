import { useNavigate, useParams, Link } from 'react-router-dom'
import React, { useState } from 'react'
import EditTrip from './EditTrip'

function Trip({ trip, deleteTrip, user, updateTrip, apiPark_id }) {

  const { id, fullname, start_date, end_date } = trip
  console.log("Trip check")

  const navigate = useNavigate()
  const [editTrip, setEditTrip] = useState(false)

  function handleDelete() {
    fetch(`/trips/${trip.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          deleteTrip(trip.id)
          navigate(`/users/${user.id}`)
        } else {

          res.json().then(data => console.log("no bueno"))
        }
      })
  }

  function handleEdit() {
    setEditTrip(!editTrip)
  }

  return (
    <div>
      {editTrip ? <EditTrip key={id} id={id} fullname={fullname} user={user} trip={trip} /> : <div className="cards">
        <div className="trip-detail-card">
          <h4 className="trip-title">{fullname}</h4>
          <p className="card__text"><strong>Start Date:</strong> <br />{start_date}</p>
          <p className="card__text"><strong>End Date:</strong> <br />{end_date}</p>
          <p className="card__text"><strong>Activities:</strong><br />{trip.activities}</p>
          <span className="edit-icon" onClick={handleEdit}>✎</span>
          <span className="delete-icon" onClick={handleDelete}>⊗</span>
        </div>

      </div>
      }
    </div>
  )
}

export default Trip