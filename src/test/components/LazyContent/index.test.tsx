import LazyContent from 'components/LazyContent'
import { render } from 'test/util'

describe('LazyContent', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<LazyContent />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
