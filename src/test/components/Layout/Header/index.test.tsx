import Header from 'components/Layout/Header'
import { render, fireEvent } from 'test/util'

describe('Header', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Header />)

      expect(asFragment()).toMatchSnapshot()
    })

    it('should match snapshot when it is scroll more than 50', () => {
      const { asFragment } = render(<Header />)

      fireEvent.scroll(window, { target: { scrollY: 300 } })

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
