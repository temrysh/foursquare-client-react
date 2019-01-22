import React from 'react'
import { PulseLoader } from 'react-spinners'

export default ({ loading }) => (
  <div>
    <PulseLoader size={20} margin="20px" color={'#2d5be3'} loading={loading} />
  </div>
)
