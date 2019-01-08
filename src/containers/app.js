import React, { Component } from 'react'

import Greetings from '../components/greetings'

import { withStreams } from '../utils/stream-provider'
import { getUserLocation$, userLocation$ } from '../streams/location'

class App extends Component {
  componentDidMount() {
    getUserLocation$.next()
  }

  render() {
    const { userLocation } = this.props
    const { latitude = 0, longitude = 0 } = userLocation || {}

    return (
      <div>
        {userLocation ? (
          <div>
            Your latitude is {latitude}, and your longitude is {longitude}{' '}
          </div>
        ) : (
          <Greetings />
        )}
      </div>
    )
  }
}

export default withStreams(App)('userLocation')(userLocation$)
