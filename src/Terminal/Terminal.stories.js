/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import { storiesOf } from '@storybook/react'

import Terminal from './Terminal'

storiesOf('Terminal', module)
  .add('default', () => (
    <Terminal />
  ))
