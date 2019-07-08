import React, { Fragment } from 'react'
import styled from 'styled-components'

import potato from './potato.gif'

const Hello = styled.p`
  background-color: yellow;
  font-size: 20px;
  padding: 20px;
`

const App = () => (
  <Fragment>
    <Hello>React presents... the amazing dancing potato!</Hello>
    <img alt="dancing potato" src={potato} />
  </Fragment>
)

export default App
