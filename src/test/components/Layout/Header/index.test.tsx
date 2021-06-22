import Header from 'components/Layout/Header'
import { render } from 'test/util'

describe('Header', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Header />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
