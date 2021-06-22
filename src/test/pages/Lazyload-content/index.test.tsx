import { fireEvent } from '@testing-library/react'
// @ts-ignore
import preloadAll from 'jest-next-dynamic'
import LazyloadContent from 'pages/Lazyload-content'
import { render } from 'test/util'

describe('LazyloadContent', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<LazyloadContent />)

      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('Functional', () => {
    beforeEach(async () => {
      await preloadAll()
    })

    it('should match snapshot when click on show content', async () => {
      const { asFragment, findByText } = render(<LazyloadContent />)

      const backButton = await findByText('Show content')
      fireEvent.click(backButton)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
