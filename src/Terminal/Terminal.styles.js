import styled from 'styled-components'

const darkBlue = '#0D2B36'
const blue = '#438BCC'
const red = '#EE6A5F'
const green = '#62C554'
const yellow = '#F7C251'
const lightGray = '#D7D7D6'
const gray = '#95A0A1'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100vw;
  height: 100vh;
`
export const ConsoleWrapper = styled.div`
  position: relative;
  width: 640px;
  height: 480px;
  background-color: ${darkBlue};
  overflow: auto;
  border-radius: 4px;
  padding-bottom: 8px;
`
export const Console = styled.ul`
  color: ${gray};
  height: auto;
  padding-top: 30px;
`

export const Error = styled.span`
  color: ${red};
`

export const ExternalLink = styled.div`
  padding-left: 8px;
  & a:link {
    color: ${lightGray}
  }
`

export const Header = styled.div`
  position: fixed;
  background-color: ${lightGray};
  padding: 4px 8px;
  width: 640px;
`
export const Input = styled.div`
  display: flex;
`
export const Line = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 8px;

  & input {
    border: 0;
    background-color: transparent;
    flex-basis: 100%;
    color: ${lightGray};
    outline: 0;
    font-size: 16px;
  }
`
export const PathContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PathBody = styled.div`
  background-color: ${blue};
  color: ${lightGray};
  width: 140px;
  padding: 0 4px;
`

export const PathTriangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent ${blue};
    margin-right: 8px;
  }
`

export const Success = styled.span`
  color: ${green};
`
