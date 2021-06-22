import Icon from 'components/Common/Icon'
import { ICONS } from 'constants/icons'
import { render } from 'test/util'

describe('Icon', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Icon src={ICONS.email} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
