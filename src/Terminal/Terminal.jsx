import React, { memo, useRef, useState } from 'react'

import {
  Container,
  Console,
  ConsoleWrapper,
  ExternalLink,
  Header,
  Input,
} from './Terminal.styles'

import data from './data.json'

const randomIndex = max => Math.floor(Math.random() * max)

const getRandomError = () => {
  const index = randomIndex(data.errors.length)
  return { msg: data.errors[index] }
}

const getRandomSuccess = () => {
  const index = randomIndex(data.success.length)
  return { msg: data.success[index] }
}

const Path = () => <span>flaco ></span>

function Terminal() {
  const [resp, setResp] = useState([])
  const inputRef = useRef()


  const findCard = () => {
    const respNew = [...resp]
    const { current: { value } } = inputRef
    respNew.push({ path: true, msg: value })
    const found = data.cards.filter(c => c.tags.includes(value))
    if (!found.length) {
      const error = getRandomError()
      respNew.push(error)
    } else {
      const success = getRandomSuccess()
      respNew.push(success)
      found.forEach(f => respNew.push(f))
    }
    setResp(respNew)
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      findCard()
      inputRef.current.value = ''
    }
  }
  console.log('resp', resp);
  return (
    <Container>
      <ConsoleWrapper>
        <Header>header</Header>
        <Console>
          {resp.map((r, i) => (
            <li key={i}>
              {r.path && <Path />}
              {r.msg}
              {r.link
              && (
                <ExternalLink>
                  <a href={r.link} rel="noopener noreferrer" target="_blank">{r.link}</a>
                </ExternalLink>
              )}
            </li>
          ))}
        </Console>
        <Input>
          <Path />
          <input ref={inputRef} type="text" onKeyDown={keyDownHandler} />
        </Input>
      </ConsoleWrapper>
    </Container>
  )
}

export default memo(Terminal)
