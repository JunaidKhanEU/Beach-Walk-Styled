import React from 'react'
import Section from '../SectionStyled/SectionStyled'
import Title from '../Title/Title'
import aboutImg from '../../../images/aboutBcg.jpeg'
import { setColor, sizes } from '../../../styles'
import styled from 'styled-components'
import {PrimaryButton} from '../Button/ButtonsStyled'

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className='about-img'>
          <img src={aboutImg} alt='about us' />
        </div>
        <div className='about-info'>
          <Title title='about us' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores, facilis modi eum sint beatae suscipit numquam dolorem iste provident! Maxime asperiores quam nisi saepe consectetur minima vitae dicta ipsam!</p>
          <PrimaryButton>read more</PrimaryButton>
        </div>
      </AboutCenter>
    </Section>
  )
}

const AboutCenter = styled.div`
.about-img, .about-info{
  padding:3rem;
}
.about-img{
  img{
    width:100%;
    display:'block';
    border: 2px solid ${setColor.primaryColor};
  }

}

.about-info{
  p{
    letter-spacing:.2rem;
  }

}

width:90vw;
margin: 0 auto;
@media (min-width:${sizes.tablet}px){
  max-width:1170px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap:2rem;
  .about-img{
    align-self: center;
  }
  .about-info{
    align-self: center;
    p{
     font-size:1.2rem;
     
    }
  }
}

`

export default About
