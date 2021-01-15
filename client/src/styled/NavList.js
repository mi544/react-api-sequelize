import styled from 'styled-components'

const NavList = styled.ul`
  list-style-type: none;
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
  min-width: 200px;
  min-height: 100px;
  max-width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;

  & > li {
    border-top: 1px solid black;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    &:first-child {
      border-top: none;
    }
  }
`

export { NavList }
