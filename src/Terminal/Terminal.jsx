import React, {
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import { DateTime, Settings } from 'luxon'
import uuidv4 from 'uuid/v4'

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

Settings.defaultLocale = 'us'
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

  const f = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  const dt = DateTime.local()
  dt.setZone('Europe/London')
  const today = dt.toLocaleString(f)
  const onClickOutside = () => inputRef.current.focus()

  useEffect(onClickOutside, [])

  useEffect(() => {
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight
  }, [resp])

  const findCard = () => {
    const respNew = [...resp]
    const { current: { value } } = inputRef
    respNew.push({ path: true, msg: value })
    const found = data.cards.filter(c => c.tags.includes(value.toLowerCase()))
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

  const cleanScreen = () => {
    setResp([])
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      if (inputRef.current.value === 'clean' || inputRef.current.value === 'clear') {
        cleanScreen()
      } else {
        findCard()
      }
      inputRef.current.value = ''
    }

  }

  return (
    <Container>
      <ConsoleWrapper ref={consoleRef}>
        <Header>1: flacoloco.com: /personal/website</Header>
        <Console>
          <Line>{`Last login: ${today} on ttys000`}</Line>
          {resp.map(r => (
            <li key={uuidv4()}>
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
                {r.picture
                && (
                  <>
                    <span>&nbsp;&nbsp;</span>
                    <a href={r.picture.link} target="blank">
                      <img alt={r.picture.alt} src={r.picture.src} width={r.picture.width} />
                    </a>
                    <br />
                    <br />
                  </>
                )}
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
          <input ref={inputRef} type="text" onKeyDown={keyDownHandler} onBlur={onClickOutside} />
        </Line>
      </ConsoleWrapper>
    </Container>
  )
}

export default memo(Terminal)
