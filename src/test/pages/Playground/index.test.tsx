import * as useIsPhone from 'components/CustomHooks/useIsPhone'
import Playground from 'pages/Playground'
import { render } from 'test/util'

jest.mock('components/CustomHooks/useIsPhone')
const mockedUseIsPhone = useIsPhone as jest.Mocked<typeof useIsPhone>

describe('Playground', () => {
  describe('Rendering', () => {
    it('should match snapshot if it is phone', () => {
      mockedUseIsPhone.default.mockImplementation(() => ({
        isPhone: true,
        fetchDevice: jest.fn(),
      }))

      const { asFragment } = render(<Playground />)

      expect(asFragment()).toMatchSnapshot()
    })

    it('should match snapshot if it is desktop', () => {
      mockedUseIsPhone.default.mockImplementation(() => ({
        isPhone: false,
        fetchDevice: jest.fn(),
      }))

      const { asFragment } = render(<Playground />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
