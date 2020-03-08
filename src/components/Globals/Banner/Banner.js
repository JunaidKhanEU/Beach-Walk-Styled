import React from 'react'
import styled, { keyframes } from 'styled-components'
import { setColor, sizes } from '../../../styles'

const Banner = ({ className, title, text, children, greeting }) => {
  return (
    <div className={className}>
      <h1>{greeting} <span>{title}</span></h1>
      <div className='info'>
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}

const animation = keyframes`
0%{
  opacity: 0;
  transform:translateY(100%);
}

50%{
  opacity: 0.5;
  transform:translateY(-5%);
}

100%{
  opacity: 1;
  transform:translateY(0);
}
`

export default styled(Banner)`
background: rgba(0,0,0,0.7);
text-align:center;
padding: 6rem 3.2rem;
letter-spacing:.3rem;
color: ${setColor.mainWhite};
h1{
  text-transform: capitalize;
  font-size: 2.5rem;
  color: ${setColor.primaryColor};
  span{
    color:${setColor.mainWhite};
  }
}
p{
  width:85%;
  margin: 0 auto;
}

@media (min-width:${sizes.tablet}px){
  width:70vw;
  border: 6px solid ${setColor.primaryColor};
  p{
    width: 75%;
  }
}
h1{
animation: ${animation} 3s ease-in-out;
}
.info{
  animation: ${animation} 3s ease-in-out;
}
`
