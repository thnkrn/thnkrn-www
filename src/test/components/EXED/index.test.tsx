import EXED from 'components/EXED'
import { EXPERIENCE } from 'constants/experience'
import { ICONS } from 'constants/icons'
import { render } from 'test/util'

describe('EXED', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const props = {
        title: 'Experience',
        content: EXPERIENCE,
        icon: ICONS.work,
      }
      const { asFragment } = render(<EXED {...props} />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
