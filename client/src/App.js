import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Nav from './components/Nav'

const GlobalStyle = createGlobalStyle`
  body{
    text-align: center;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  )
}

export default App
