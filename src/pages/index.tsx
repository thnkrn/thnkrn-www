import { styled } from '@compiled/react'
// import ImageWrapper from 'components/ImageWrapper'
import Layout from 'components/Layout'
import TYPO from 'constants/typography'
// import Img from 'react-optimized-image'
import Image from 'next/image'

const StyledProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2vw;
`

const StyledProfileImage = styled.div`
  @media screen and (max-width: 480px) {
    width: 100vw;
  }

  width: 20vw;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
`

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
`

const IndexPage = () => (
  <Layout>
    <h1 className={TYPO.h1}>Hola!</h1>
    <StyledProfileWrapper>
      <StyledProfileImage>
        <StyledImage
          src="/images/profile.jpeg"
          alt="Picture of thnkrn"
          width={1385}
          height={1385}
          sizes="20vw"
          layout="responsive"
        />
      </StyledProfileImage>
      <StyledTextWrapper>
        <span className={TYPO.subtitle1}>My name is</span>
        <span className={TYPO.h2}>Thanakorn Ariyagusolsuthi</span>
      </StyledTextWrapper>
    </StyledProfileWrapper>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
  </Layout>
)

export default IndexPage
