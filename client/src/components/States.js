import React from 'react'
import StateButtons from './StateButton'

function States({ states }) {

  const mappedStates = states.map((state) => {
    return <StateButtons key={state.id} name={state.name} abbr={state.abbreviation} />
  })

  return (
    <div className='states'>
      <div className='buttons'>
      {mappedStates}
      </div>
    </div>
  )
}

export default States