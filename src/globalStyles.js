import { createGlobalStyle } from 'styled-components'
import { setColor, setFont } from './styles'
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700&display=swap');
*,::after,::before{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html{
  font-size:62.5%;
}
body{
  ${setFont.mainFont}
  font-size:1.6rem;
  color:${setColor.mainBlack};
  background:${setColor.mainWhite};
}
h1{
  font-size:4rem;
  line-height: 1.2;
  margin-bottom:0.5rem;
}
h2{
  font-size:3rem;
  margin-bottom:0.75rem;
}
h3{
  font-size:2.5rem;
  line-height: 1;
  margin-bottom:1rem;
}
h4{
  font-size:2.2rem;
  font-weight:bold;
  line-height: 1.2;
  margin-bottom:1.25rem;
}
h5{
  font-size:2rem;
  font-weight:bold;
  margin-bottom:0.5rem;
}
h6{
  font-size:1.6rem;
  font-weight:bold;
}

p{
  line-height: 1.2;
  font-size:1.6rem;
  margin-bottom:1.5rem;

}
`

export default GlobalStyles
