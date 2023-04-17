import React, { useState } from 'react'

function ParkActivities({ activity, checkedActivities }) {
  // const [isChecked, setIsChecked] = useState("checked")
  const [isChecked, setIsChecked] = useState(false)

  function handleChange() {
    setIsChecked(!isChecked)
    console.log(isChecked)
  }

  checkForChecks()

  function checkForChecks() {
    if (isChecked === true) {
      checkedActivities.push(activity)
    }
    else {
      for (let i = 0; i < checkedActivities.length; i++) {
        if (checkedActivities[i] === activity) {
          checkedActivities.splice(i, 1)
        }
      }
    }
  }

  console.log(checkedActivities)

  return (
    <div className="activities">
      <input type="checkbox" id="checkbox-style" onChange={handleChange} checked={isChecked} />
      <label>{activity}</label>
    </div>
  )
}

export default ParkActivities


        // if (isChecked === "checked") {
        //     setIsChecked("unchecked")
        //     // checkedActivities.push(activity)
        //     // console.log(checkedActivities)
        // }
        // else setIsChecked("checked")
        // // console.log(activity)
        // // if (isChecked
        // // setIsChecked(!isChecked)
        // // return true