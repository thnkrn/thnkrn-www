import ImageStaticSite from 'pages/Image-static-site'
import { render } from 'test/util'

describe('ImageStaticSite', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<ImageStaticSite />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
