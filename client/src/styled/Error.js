import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`

const Error = styled.h2`
  animation: ${appear} 0.3s forwards;
  margin: 2rem auto;
`

export { Error }
