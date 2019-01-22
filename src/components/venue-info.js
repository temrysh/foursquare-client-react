import React from 'react'
import styled from 'styled-components'
import { FaWalking } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

const Card = styled.li`
  background-color: #ffffff;
  margin: 10px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #dddfe2;
  border-radius: 3px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardHeading = styled.h3`
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1px;
  color: #4e595d;
  margin: 0;
`

const CardContent = styled.p`
  color: #4e595d;
  margin: 0;
  margin-top: 6px;
`

const CardFooter = styled.p`
  color: #4e595d;
  margin: 0;
  margin-top: 40px;
`

const DistanceIndicator = styled.span`
  background-color: #e15684;
  color: #ffffff;
  padding: 8px;
  border-radius: 3px;
`

const WalkIcon = styled(FaWalking)`
  margin-right: 6px;
`

const AddressIcon = styled(GoLocation)`
  margin-right: 6px;
`

export default ({ venue }) => (
  <Card>
    <CardHeader>
      <CardHeading>{venue.name}</CardHeading>
      <DistanceIndicator>
        <WalkIcon />
        {venue.location.distance}m
      </DistanceIndicator>
    </CardHeader>
    <CardContent>
      {venue.categories.map(({ name }) => (
        <span key={name}>{name}</span>
      ))}
    </CardContent>
    <CardFooter>
      <AddressIcon />
      {venue.location.formattedAddress.join(', ')}
    </CardFooter>
  </Card>
)
