import React from 'react'
import styled from 'styled-components'

import Heading from './heading'

const ClearList = styled.ul`
  list-style: none;
  padding: 0;
`

export default ({ children }) => (
  <div>
    <Heading>Venues nearby:</Heading>
    <ClearList>{children}</ClearList>
  </div>
)
