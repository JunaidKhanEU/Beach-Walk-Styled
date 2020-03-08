import React from 'react'
import styled from 'styled-components'
import { setFont } from '../../../styles'
const Title = ({ className, title, center }) => {
  return (
    <h3 className={className}>
      {title}
    </h3>
  )
}

export default styled(Title)`
  font-size:3rem;
  text-transform:capitalize;
  letter-spacing: 1rem;
  ${setFont.slantedFont};
  text-align: ${props => props.center ? 'center' : 'left'};
`
