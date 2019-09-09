import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { Ellipsis, Ripple, Ring } from '../src'

storiesOf('Spinners', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ripple', () => <Ripple />)
  .add('Ring', () => <Ring />)
