import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import StateParks from './StateParks'
import StateParkDetails from './StateParkDetails'
import '../styles/StateButton.css'

function StateButton({ name, abbr }) {
  const [stateParksList, setStateParksList] = useState([])
  const [showStateParks, setShowStateParks] = useState(false)

  const navigate = useNavigate()

  const handleShowParks = useCallback(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${abbr}&limit=50&api_key=hQLUJV4Ctu79CYYc4YTuslyjKz36u5520OCQlXnF`)
      .then((r) => r.json())
      .then((stateParksData) => {
        console.log(stateParksData)
        setStateParksList(stateParksData)
        // navigate('/state_park_details')
        setShowStateParks(true)
        localStorage.setItem('stateParksList', JSON.stringify(stateParksData))
      })
      .catch((error) => console.error(error))
  }, [abbr])

  return (
    <div>
      <button className='button' onClick={handleShowParks}>{name}</button>
      {showStateParks ? <StateParks
        stateParksList={stateParksList}
        showStateParks={showStateParks}
        setShowStateParks={setShowStateParks}
        name={name}
      /> : null}
    </div>
  )
}

export default StateButton