import React, { Component } from 'react'
import { combineLatest } from 'rxjs'

export const withStreams = WrappedComponent => (...streamNames) => (...streams) =>
  class extends Component {
    _subscription = null

    constructor(props) {
      super(props)
      this.state = {
        streamsValues: {},
      }
    }

    componentDidMount() {
      const state = combineLatest(...streams, (...values) =>
        streamNames.reduce((acc, name, idx) => {
          acc[name] = values[idx]
          return acc
        }, {}),
      )

      this._subscription = state.subscribe(this.handleUpdate)
    }

    componentWillUnmount() {
      this._subscription && this._subscription.unsubscribe && this._subscription.unsubscribe()
    }

    handleUpdate = streamsValues => {
      this.setState(() => ({
        streamsValues,
      }))
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state.streamsValues} />
    }
  }
