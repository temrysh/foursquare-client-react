import React from 'react'

export default ({ venue }) => (
  <li>
    <h3>{venue.name}</h3>
    <p>
      {venue.categories.map(({ name }) => (
        <span key={name}>{name}</span>
      ))}
    </p>
    <p>{venue.location.formattedAddress.join(', ')}</p>
    <p>{venue.location.distance}</p>
  </li>
)
