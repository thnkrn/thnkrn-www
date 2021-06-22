import { renderHook } from '@testing-library/react-hooks'
import useIsPhone from 'components/CustomHooks/useIsPhone'

describe('useIsPhone', () => {
  it('should return default isPhone, and fetchDevice function', () => {
    const { result } = renderHook(() => useIsPhone())

    expect(result.current.isPhone).toBeFalsy()
    expect(result.current.fetchDevice).toStrictEqual(expect.any(Function))
  })
})
