import IndexPage from 'pages/index'
import { render } from 'test/util'

describe('Index', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<IndexPage />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
