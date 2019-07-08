/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Terminal from '../src/Terminal/Terminal'

storiesOf('Terminal', module)
  .add('default', () => (
    <Terminal />
  ))
