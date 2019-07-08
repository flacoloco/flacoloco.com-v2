import React, { Fragment, memo, useRef, useState } from 'react'

import data from './data.json'

const getRandomError = () => {
  const index = 3
  return { msg: data.errors[index] }
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
      found.forEach(f => respNew.push(f))
    }
    console.log('respNew', respNew)
    setResp(respNew)
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') findCard()
  }

  return (
    <Fragment>
      <h1>Terminal</h1>
      <input ref={inputRef} type="text" onKeyDown={keyDownHandler} />
      <ul>
        {resp.map((r, i) => (
          <li key={i}>{r.msg}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default memo(Terminal)
