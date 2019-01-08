import React from 'react'

import List from '../components/list'
import VenueInfo from '../components/venue-info'
import Greetings from '../components/greetings'

import { withStreams } from '../utils/stream-provider'
import { venues$ } from '../streams/foursquare'
import { getUserLocation$, userLocation$ } from '../streams/location'

const App = props => (
  <>
    {props.userLocation ? (
      <List>
        {(props.venues || []).map(venue => (
          <VenueInfo key={venue.id} venue={venue} />
        ))}
      </List>
    ) : (
      <Greetings
        onClick={() => {
          getUserLocation$.next()
        }}
      />
    )}
  </>
)

export default withStreams(App)('userLocation', 'venues')(userLocation$, venues$)
