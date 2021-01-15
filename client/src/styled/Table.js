import styled from 'styled-components'

const Table = styled.div`
  background-color: #f2f2f2;
  text-align: center;
  margin: auto;
  width: 60%;
  & > * {
    border-top: 1px solid black;
  }
  & > *:last-child {
    border-bottom: 1px solid black;
  }
`

export { Table }
