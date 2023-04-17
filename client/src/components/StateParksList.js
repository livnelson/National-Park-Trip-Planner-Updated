import React, { useState } from 'react'
import StateParksDetails from './StateParkDetails'
import '../styles/StateParksList.css'

function StateParksList({ images, name, url, description, addresses, directionsURL, activities }) {
  const [showParkDetails, setShowParkDetails] = useState()

  const filteredAddresses = addresses.filter(address => {
    if (address.type === 'Physical') return true
  })

  const mappedAddresses = filteredAddresses.map(address => {
    return (
      <div>
        <h6 className='park-subheader'>Park Address:</h6>
        <div className='park-address'>
          <p className='address'>{address.line1}</p>
          <p className='address'>{address.city}, {address.stateCode} {address.postalCode}</p>
        </div>
      </div>)
  })

  function handleShowParkDetails() {
    setShowParkDetails(!showParkDetails)
  }

  return (
    <div className='park-detail-card'>
      <h4 className='park-name' onClick={handleShowParkDetails}>{name}</h4>
      <h6 className='park-website'>Park Website: <a href={url} target='_blank' rel="noreferrer">{url}</a></h6>
      <span>{mappedAddresses}</span>
     {showParkDetails ? <StateParksDetails
        images={images}
        name={name}
        url={url}
        description={description}
        addresses={addresses}
        directionsURL={directionsURL}
        activities={activities}
      /> : null}
    </div>
  )
}


export default StateParksList