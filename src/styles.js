import aboutImg from './images/aboutBcg.jpeg'

export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#ececec',
  lightGrey: '#f7f7ff7'
}

export const setFont = {
  mainFont: "font-family: 'Lato', sans-serif;",
  slantedFont: "font-family: 'Courgette', cursive;"
}

export const setFlex = ({ x, y } = { x: 'center', y: 'center' }) => {
  return `
  display: flex;
  align-items:${y};
  justify-content:${x};
  `
}

export const setBackground = ({ img = `${aboutImg}`, color = 'rgba(0,0,0,0)' } = { }) => {
  return `
  background: linear-gradient(${color},${color}), url(${img}) center/cover no-repeat;
  `
}

export const sizes = {
  large:1200,
  desktop:992,
  tablet:768,
  phone:576
}
