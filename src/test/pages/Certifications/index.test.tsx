import * as useIsPhone from 'components/CustomHooks/useIsPhone'
import Certifications from 'pages/Certifications'
import { render } from 'test/util'

jest.mock('components/CustomHooks/useIsPhone')
const mockedUseIsPhone = useIsPhone as jest.Mocked<typeof useIsPhone>

describe('Certifications', () => {
  describe('Rendering', () => {
    it('should match snapshot if it is desktop', () => {
      mockedUseIsPhone.default.mockImplementation(() => ({
        isPhone: false,
        fetchDevice: jest.fn(),
      }))

      const { asFragment } = render(<Certifications />)

      expect(asFragment()).toMatchSnapshot()
    })

    it('should match snapshot if it is phone', () => {
      mockedUseIsPhone.default.mockImplementation(() => ({
        isPhone: true,
        fetchDevice: jest.fn(),
      }))

      const { asFragment } = render(<Certifications />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
