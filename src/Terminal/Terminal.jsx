import React, { memo, useEffect, useRef, useState } from 'react'
import moment from 'moment'

import {
  Container,
  Console,
  ConsoleWrapper,
  ExternalLink,
  Error,
  Header,
  Line,
  PathBody,
  PathContainer,
  PathTriangle,
  Success,
} from './Terminal.styles'

import data from './data.json'

const Path = () => (
  <PathContainer>
    <PathBody>~/flacoloco.com/v2</PathBody>
    <PathTriangle />
  </PathContainer>
)

const randomIndex = max => Math.floor(Math.random() * max)

const getRandomError = () => {
  const index = randomIndex(data.errors.length)
  return { error: data.errors[index] }
}

const getRandomSuccess = () => {
  const index = randomIndex(data.success.length)
  return { success: data.success[index] }
}

function Terminal() {
  const [resp, setResp] = useState([])
  const inputRef = useRef()
  const consoleRef = useRef()
  moment.locale('en-GB')
  const today = moment().format('llll')


  useEffect(() => {
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight
  }, [resp])

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

  return (
    <Container>
      <ConsoleWrapper ref={consoleRef}>
        <Header>1: flacoloco.com: /personal/website</Header>
        <Console>
          <Line>{`Last login: ${today} on ttys000`}</Line>
          {resp.map((r, i) => (
            <li key={i}>
              <Line>
                {r.path && <Path />}
                {r.error
                && (
                  <Error>
                    {r.error}
                  </Error>
                )}
                {r.success
                && (
                  <Success>
                    {r.success}
                  </Success>
                )}
                {r.msg}
                {r.link
                && (
                  <ExternalLink>
                    <a href={r.link} rel="noopener noreferrer" target="_blank">{r.link}</a>
                  </ExternalLink>
                )}
              </Line>
            </li>
          ))}
        </Console>
        <Line>
          <Path />
          <input ref={inputRef} type="text" onKeyDown={keyDownHandler} />
        </Line>
      </ConsoleWrapper>
    </Container>
  )
}

export default memo(Terminal)
