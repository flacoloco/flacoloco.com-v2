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
`
export const ConsoleWrapper = styled.div`
  width: 640px;
  height: 180px;
  background-color: ${darkBlue};
  overflow: auto;
`
export const Console = styled.ul`
  color: ${gray};
  height: auto;
`

export const ExternalLink = styled.div`
  & a:link {
    color: ${lightGray}
  }
`

export const Header = styled.div`
  background-color: ${lightGray};
`
export const Input = styled.div`
  display: flex;
`
