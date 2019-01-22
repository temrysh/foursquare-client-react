import React from 'react'

import Wrapper from '../components/wrapper'
import Spinner from '../components/spinner'
import List from '../components/list'
import VenueInfo from '../components/venue-info'
import Greetings from '../components/greetings'

import { GlobalStyle } from '../utils/styles'
import { withStreams } from '../utils/stream-provider'
import { venues$ } from '../streams/foursquare'
import { getUserLocation$, userLocation$ } from '../streams/location'
import { requestStatus$ } from '../streams/status'

const App = ({ requestStatus, userLocation, venues }) => (
  <Wrapper>
    <GlobalStyle />
    <Spinner loading={requestStatus === 'pending'} />
    {requestStatus === 'complete' && !userLocation && (
      <Greetings
        onClick={() => {
          getUserLocation$.next()
        }}
      />
    )}
    {requestStatus === 'complete' && userLocation && (
      <List>
        {(venues || []).map(venue => (
          <VenueInfo key={venue.id} venue={venue} />
        ))}
      </List>
    )}
  </Wrapper>
)

export default withStreams(App)('requestStatus', 'userLocation', 'venues')(requestStatus$, userLocation$, venues$)
