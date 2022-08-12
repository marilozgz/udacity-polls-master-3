import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {LoginSelect} from './loginSelect'

test('NameConsumer shows default value', () => {
    render(<LoginSelect />)
    expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
      'My Name Is: Unknown',
    )
  })