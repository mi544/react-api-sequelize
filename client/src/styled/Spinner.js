import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(360deg)
  }
  100% {
    transform: rotate(0deg)
  }
`

const Spinner = styled.div`
  opacity: 0.3;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: cyan;
  animation: ${spin} 2s infinite ease-in-out;
  margin: auto;
`

export { Spinner }
