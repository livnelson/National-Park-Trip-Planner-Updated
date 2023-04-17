import React from 'react'
import '../styles/StateParkDetails.css'

function StateParksDetails({ images, name, url, description, addresses, directionsURL, activities }) {
  
  const filteredAddresses = addresses.filter(address => {
    if (address.type === "Physical")
      return true
  })

  // function toggleViewCreate(){
  //   setViewCreate(!viewCreate)
  // }
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
        <p className="photo-cred"> Photo Credit: {image.credit}</p>
        <p className='image-title'>{image.title}</p>
        {/* <p>{image.caption}</p> */}
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

  console.log(mappedActivities)


  return (
    <div className='park-details'>
    <h6 className='park-subheader'>Park Description:</h6>
    <p className="park-description">{description}</p>
    <div>
      <br />
      <h6 className='park-subheader'>Park Activities:</h6>
      <ul className="activity-details">{mappedActivities}</ul>
    </div>
    <div>
      <h6 className='park-subheader'>Park Images:</h6>
      <span className="image-cards">{mappedImages}</span>
    </div>
    <br />
    </div>
  )
}

export default StateParksDetails