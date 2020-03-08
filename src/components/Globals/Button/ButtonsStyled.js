import styled from 'styled-components'
import { setColor, setFont } from '../../../styles'

export const PrimaryButton = styled.button`
display:inline-block;
background: ${setColor.primaryColor};
color: ${setColor.mainWhite};
text-transform:capitalize;
font-size:1.8rem;
${setFont.mainFont};
padding:${(props) => props.big ? '1rem 2.6rem' : '.2rem 1.6rem'};
border: 2px solid ${setColor.primaryColor};
letter-spacing: .2rem;
margin:2rem;
text-decoration:none;
outline:none;
transition: all 1s ease-in-out;
cursor: pointer;
&:hover{
  background: transparent;
  color:${setColor.primaryColor};
}
`
