import React from 'react'
import styled from 'styled-components'
import { GoLocation } from 'react-icons/go'

import Heading from './heading'
import Button from './button'

const GreetingsWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`

const StyledLocationIcon = styled(GoLocation)`
  font-size: 90px;
  color: #e15684;
  align-self: center;
`

const EmptySpace = styled.div`
  width: 100%;
  height: 200px;
`

export default ({ onClick }) => (
  <GreetingsWrapper>
    <StyledLocationIcon />
    <Heading>
      To explore venues nearby
      <br />
      share your location
    </Heading>
    <Button onClick={onClick}>Share</Button>
    <EmptySpace />
  </GreetingsWrapper>
)
