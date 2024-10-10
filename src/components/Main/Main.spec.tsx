import { render, screen } from '@testing-library/react'

import Main from './Main'

describe('Main componente', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#06092b')
  })
})
