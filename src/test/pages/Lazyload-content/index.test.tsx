import LazyloadContent from 'pages/Lazyload-content'
import { render } from 'test/util'

describe('LazyloadContent', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<LazyloadContent />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
