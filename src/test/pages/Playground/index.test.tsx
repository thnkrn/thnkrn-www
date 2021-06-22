import Playground from 'pages/Playground'
import { render } from 'test/util'

describe('Playground', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Playground />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
