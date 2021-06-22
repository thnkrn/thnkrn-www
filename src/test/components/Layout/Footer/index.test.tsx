import Footer from 'components/Layout/Footer'
import { render } from 'test/util'

describe('Footer', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Footer />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
