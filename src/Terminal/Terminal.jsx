import React, { memo, useRef, useState } from 'react'

import { Container, Console, Header } from './Terminal.styles'

import data from './data.json'

const getRandomError = () => {
  const index = 3
  return { msg: data.errors[index] }
}

const getRandomSuccess = () => {
  const index = 1
  return { msg: data.success[index] }
}

function Terminal() {
  const [resp, setResp] = useState([])
  const inputRef = useRef()


  const findCard = () => {
    const respNew = [...resp]
    const found = data.cards.filter(c => c.tags.includes(inputRef.current.value))
    if (!found.length) {
      console.log('no results')
      // get random error
      const error = getRandomError()
      console.log('error', error)
      respNew.push(error)
    } else {
      const success = getRandomSuccess()
      respNew.push(success)
      found.forEach(f => respNew.push(f))
    }
    console.log('respNew', respNew)
    setResp(respNew)
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') findCard()
  }

  return (
    <Container>
      <Header>header</Header>
      <Console>
        {resp.map((r, i) => (
          <li key={i}>{r.msg}</li>
        ))}
      </Console>
      <input ref={inputRef} type="text" onKeyDown={keyDownHandler} />
    </Container>
  )
}

export default memo(Terminal)
