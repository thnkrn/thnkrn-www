import Layout from 'components/Layout'
import { render } from 'test/util'

describe('Layout', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const props = {
        children: <div />,
      }
      const { asFragment } = render(<Layout {...props} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
