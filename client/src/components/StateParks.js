import React from 'react'
import StateParkDetails from './StateParkDetails'
import '../styles/StateParks.css'
import StateParksList from '../components/StateParksList'

function StateParks({ stateParksList, showStateParks, setShowStateParks, name }) {
  console.log(stateParksList)

  function closeParkDetails() {
    setShowStateParks(!showStateParks)
  }

  const mappedStateParksList = stateParksList.data.map((park) => {
    return (
      <StateParksList
        key={park.id}
        id={park.id}
        images={park.images}
        name={park.fullName}
        url={park.url}
        description={park.description}
        addresses={park.addresses}
        directionsUrl={park.directionsUrl}
        activities={park.activities}
      />)
  })

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='list-button' onClick={closeParkDetails}>Close List</button>
        <h3 className='modal-title'>{name} State Park List</h3>
        <p className='click-details'>｛ <em>Click Park Name for More Details</em> ｝</p>
        {mappedStateParksList}
      </div>
    </div>
  )
}

export default StateParks