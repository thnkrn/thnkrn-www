import { styled } from '@compiled/react'
import { ReactNode } from 'react'

interface PropsStyled {
  $mobileHeight?: number
  $mobileWidth?: number
  $height: number
  $width: number
}

const StyledImgWrapper = styled.div<PropsStyled>`
  /* Note: Adjust breakpoint here */
  @media screen and (max-width: 480px) {
    padding-top: ${({ $mobileHeight, $mobileWidth, $height, $width }) =>
      `${(($mobileHeight || $height) / ($mobileWidth || $width)) * 100}%`};
  }

  position: relative;
  width: 100%;
  padding-top: ${({ $height, $width }) => ($height / $width) * 100}%;
`

interface Props {
  children: ReactNode
  mobileHeight?: number
  mobileWidth?: number
  height: number
  width: number
}

export function ImageWrapper({ children, mobileHeight, mobileWidth, height, width }: Props) {
  return (
    <StyledImgWrapper
      $mobileHeight={mobileHeight}
      $mobileWidth={mobileWidth}
      $height={height}
      $width={width}
    >
      {children}
    </StyledImgWrapper>
  )
}

export default ImageWrapper
