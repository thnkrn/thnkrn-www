import { styled } from '@compiled/react'
import ImageWrapper from 'components/ImageWrapper'
import Layout from 'components/Layout'
import TYPO from 'constants/typography'
import Img from 'react-optimized-image'

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
        <ImageWrapper width={1385} height={1385}>
          <Img
            css={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: '50%',
            }}
            src={require('public/images/profile.jpeg')}
            sizes={[400, 500, 700, 900]}
            breakpoints={[599, 1000, 1599]}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </ImageWrapper>
      </StyledProfileImage>
      <StyledTextWrapper>
        <span className={TYPO.subtitle1}>My name is</span>
        <span className={TYPO.h2}>Thanakorn Ariyagusolsuthi</span>
      </StyledTextWrapper>
    </StyledProfileWrapper>
  </Layout>
)

export default IndexPage
