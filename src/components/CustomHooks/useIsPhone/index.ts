import { useCallback, useState } from 'react'
import { isMobile } from 'react-device-detect'

const useIsPhone = () => {
  const [isPhone, setIsPhone] = useState(false)

  const fetchDevice = useCallback(() => {
    setIsPhone(isMobile)
  }, [])

  return { isPhone, fetchDevice }
}

export default useIsPhone
