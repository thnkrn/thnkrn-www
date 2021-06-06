import { styled } from '@compiled/react'
import { useEffect, useState } from 'react'

interface Props {
  src: string
}

const StyledIconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  opacity: 0;

  &.loaded {
    opacity: 1;
  }
`

const Icon = ({ src }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <StyledIconWrapper className={`icon${isLoading ? '' : ' loaded'}`}>
      <use href={src} />
    </StyledIconWrapper>
  )
}

export default Icon
