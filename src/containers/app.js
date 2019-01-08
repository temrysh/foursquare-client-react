import React, { Component } from 'react'

import Greetings from '../components/greetings'

import { withStreams } from '../utils/stream-provider'
import { getUserLocation$, userLocation$ } from '../streams/location'
import { getVenuesByLocation$, venues$ } from '../streams/foursquare'

class App extends Component {
  componentDidUpdate() {
    const { userLocation } = this.props
    userLocation && getVenuesByLocation$.next(userLocation)
  }

  render() {
    const { userLocation } = this.props
    const { venues = [] } = this.props

    return (
      <div>
        {userLocation ? (
          venues.map(v => <p key={v.venue.id}>{v.venue.name}</p>)
        ) : (
          <Greetings
            onClick={() => {
              getUserLocation$.next()
            }}
          />
        )}
      </div>
    )
  }
}

export default withStreams(App)('userLocation', 'venues')(userLocation$, venues$)
