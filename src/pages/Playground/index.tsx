import { styled } from '@compiled/react'
import useIsPhone from 'components/CustomHooks/useIsPhone'
import useShimmer from 'components/CustomHooks/useShimmer'
import Layout from 'components/Layout'
import { PLAYGROUND_LIST } from 'constants/playground'
import TYPO from 'constants/typography'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const StyledContainer = styled.div`
  a {
    text-decoration: none;
  }
`

const StyledPageTitle = styled.h1`
  @media screen and (max-width: 480px) {
    text-align: center;
  }

  margin-bottom: 20px;
  text-align: center;
`

const StyledWrapper = styled.div`
  a {
    @media screen and (max-width: 480px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 40px;
    border-bottom: 1px solid var(--thnkrn-white);
  }
`

const StyledImage = styled.div`
  @media screen and (min-width: 481px) and (max-width: 1024px) {
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  width: 30vw;
`

const StyledTextWrapper = styled.div`
  @media screen and (max-width: 480px) {
    margin-left: 0;
    text-align: center;
  }

  @media screen and (min-width: 481px) {
    flex: 1;
  }

  display: flex;
  flex-direction: column;
  margin-left: 5vw;

  .subtitle1 {
    @media screen and (max-width: 480px) {
      margin-top: 20px;
    }

    color: var(--thnkrn-blue);
  }

  .body1 {
    margin-top: 2vw;
  }
`

const Playground = () => {
  const { isPhone, fetchDevice } = useIsPhone()
  const totalList = PLAYGROUND_LIST.length

  useEffect(() => {
    fetchDevice()
  }, [fetchDevice])

  return (
    <Layout>
      <StyledContainer>
        <StyledPageTitle className={TYPO.h1}>Welcome to my Playground!</StyledPageTitle>
        {PLAYGROUND_LIST.map((list, idx) => (
          <StyledWrapper key={list.title}>
            <Link href={list.linkURL}>
              <a style={idx + 1 === totalList ? { borderBottom: 'none' } : undefined}>
                <StyledImage>
                  <Image
                    src={`/images/playground/${list.imageName}.jpg`}
                    width={1920}
                    height={1080}
                    layout="responsive"
                    sizes={isPhone ? '70vw' : '30vw'}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${useShimmer(1920, 1080)}`}
                  />
                </StyledImage>
                <StyledTextWrapper>
                  <span className={TYPO.subtitle1}>{list.title}</span>
                  <span className={TYPO.body1}>{list.subtitle}</span>
                </StyledTextWrapper>
              </a>
            </Link>
          </StyledWrapper>
        ))}
      </StyledContainer>
    </Layout>
  )
}

export default Playground
