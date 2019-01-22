import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Wrapper from '../components/wrapper'
import Spinner from '../components/spinner'
import List from '../components/list'
import VenueInfo from '../components/venue-info'
import Greetings from '../components/greetings'

import { withStreams } from '../utils/stream-provider'
import { venues$ } from '../streams/foursquare'
import { getUserLocation$, userLocation$ } from '../streams/location'
import { requestStatus$ } from '../streams/status'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
  #root {
    flex: 1;
    display: flex;
    justyfy-content: center;
    align-itmes: center;
  }
`

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
