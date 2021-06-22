import Typography from 'pages/Typography'
import { render } from 'test/util'

describe('Typography', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Typography />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
