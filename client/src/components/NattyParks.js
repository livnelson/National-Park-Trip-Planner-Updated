import React from 'react'
import Park from './Park'

export default function NattyParks({ parks, user }) {

    // console.log(parks)
    // console.log(filteredParks)

    let checkedActivities = []

    const mappedParks = parks.map((park) => {
        return <Park
            key={park.id}
            id={park.id}
            fullname={park.fullName}
            activities={park.activities}
            images={park.images}
            addresses={park.addresses}
            description={park.description}
            directionsUrl={park.directionsUrl}
            checkedActivities={checkedActivities}
            user={user}
        />
    })

    console.log(mappedParks)

    return (
        <div>
            {mappedParks}
            <br />
        </div>
    )
}