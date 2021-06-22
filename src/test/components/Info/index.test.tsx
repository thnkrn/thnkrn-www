import Info from 'components/Info'
import { render } from 'test/util'

describe('Info', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Info />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
