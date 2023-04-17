import React, { useState } from 'react'
import CreateTrip from './CreateTrip'

function ParkDetails({ id, fullname, images, activities, addresses, description, directionsUrl, user, checkedActivities }) {
  const [viewCreate, setViewCreate] = useState(false)
  const filteredAddresses = addresses.filter(address => {
    if (address.type === "Physical")
      return true
  })

  function toggleViewCreate() {
    setViewCreate(!viewCreate)
  }
  console.log(activities)

  const mappedAddresses = filteredAddresses.map(address => {
    return (
      <div>
        <h6>Park Address:</h6>
        <div className="park-address">
          <p>{address.line1}</p>
          <p>{address.city}, {address.stateCode} {address.postalCode}</p>
        </div>
      </div>)
  })

  const mappedImages = images.map(image => {
    return (
      <div className="image-card-style">
        <img src={image.url} alt={image.altText} className="park-card-image" />
        <p>{image.title}</p>
        {/* <p>{image.caption}</p> */}
        <p className="photo-cred"> Photo Credit: {image.credit}</p>
      </div>
    )
  })

  let activityNames = []

  const mappedActivities = activities.map(activity => {
    activityNames.push(activity.name)
    //saveTrip(mappedActivities)
    return <li>{activity.name}</li>
  })

  console.log(activityNames)

  // console.log(fullname)
  // console.log(addresses)
  // console.log(description)

  console.log(mappedActivities)

  return (
    <div className="park-detail-card">
      <p className="park-description">{description}</p>
      <br />
      <span>{mappedAddresses}</span>
      <div>
        <br />
        <h6>Park Activities:</h6>
        <ul className="activity-details">{mappedActivities}</ul>
      </div>
      <div>
        <h6>Park Images:</h6>
        <span className="image-cards">{mappedImages}</span>
      </div>
      <br />
      {viewCreate ?
        <CreateTrip key={id} fullname={fullname} id={id} activityNames={activityNames} mappedImages={mappedImages} user={user} activities={activities} checkedActivities={checkedActivities}
        /> :
        <button className="save-button" onClick={toggleViewCreate}>Create a Trip</button>
      }
    </div>
  )
}

export default ParkDetails