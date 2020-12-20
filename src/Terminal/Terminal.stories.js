/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import { storiesOf } from '@storybook/react'

import data from './data.json'
import Terminal from './Terminal'

storiesOf('Terminal', module)
  .add('default', () => (
    <Terminal
      data={data}
    />
  ))
