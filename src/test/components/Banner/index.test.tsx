import Banner from 'components/Banner'
import { render } from 'test/util'

describe('Banner', () => {
  describe('Rendering', () => {
    it('should match snapshot if it is phone', () => {
      const { asFragment } = render(<Banner isPhone />)

      expect(asFragment()).toMatchSnapshot()
    })

    it('should match snapshot if it is desktop', () => {
      const { asFragment } = render(<Banner isPhone={false} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
