import { styled } from '@compiled/react'
import Icon from 'components/Common/Icon'
import { ICONS } from 'constants/icons'
import TYPO from 'constants/typography'
import Image from 'next/image'

interface Props {
  isPhone: boolean
}

const StyledProfileWrapper = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 0;
  }

  display: flex;
  align-items: center;
  margin-top: 2vw;
`

const StyledLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

const StyledProfileImage = styled.div`
  @media screen and (max-width: 480px) {
    width: 50vw;
  }

  width: 25vw;
  display: flex;
  flex-direction: column;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
`

const StyledTextWrapper = styled.div`
  @media screen and (max-width: 480px) {
    margin: 15px 0 0 0;
  }

  display: flex;
  flex-direction: column;
  margin-left: 5vw;

  h1 {
    margin-top: 10px;
  }

  span {
    color: #88b1b3;
  }
`

const StyledPosition = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
  }

  margin-top: 5px;
`

const StyledPositionTitle = styled.span`
  @media screen and (max-width: 480px) {
    margin-left: 0;
  }

  margin-left: 10px;
`

const Banner = ({ isPhone }: Props) => (
  <StyledProfileWrapper>
    <StyledProfileImage>
      <StyledImage
        src="/images/profile.jpeg"
        alt="Picture of thnkrn"
        width={1385}
        height={1385}
        sizes={isPhone ? '50vw' : '35vw'}
        layout="responsive"
        quality="100"
      />
      <StyledLocation>
        <Icon src={ICONS.location} />
        <span className={TYPO.body2} style={{ marginLeft: '5px' }}>
          Bangkok, Thailand
        </span>
      </StyledLocation>
    </StyledProfileImage>
    <StyledTextWrapper>
      <span className={TYPO.body1}>Hi, I'm</span>
      <h1 className={TYPO.h1}>Thanakorn Ariyagusolsuthi</h1>
      <StyledPosition>
        <StyledPositionTitle className={TYPO.italic2}>
          Assistant Manager, Software Engineer
        </StyledPositionTitle>
      </StyledPosition>
    </StyledTextWrapper>
  </StyledProfileWrapper>
)

export default Banner
