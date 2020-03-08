import React from 'react'
import HeroStyled from '../../Globals/Hero/HeroStyled'
import homeBcg from '../../../images/homeBcg.jpeg'
import Banner from '../../Globals/Banner/Banner'
import { PrimaryButton } from '../../Globals/Button/ButtonsStyled'
const Header = () => {
  return (
    <header>
      <HeroStyled img={homeBcg}>
        <Banner greeting='Welcome to' title='BeachWalk Resort' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat alias quod voluptates maxime earum voluptatum illo nisi consectetur quas hic. Enim quidem quas non modi dolore est. Quisquam, corporis quos!'>
          {/* <PrimaryButton big as='a' href='https://google.com'>View Details</PrimaryButton> */}
          <PrimaryButton big>View Details</PrimaryButton>
        </Banner>
      </HeroStyled>
    </header>
  )
}

export default Header
