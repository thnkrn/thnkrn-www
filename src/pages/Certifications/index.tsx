import { useEffect } from 'react'
import { styled } from '@compiled/react'
import useIsPhone from 'components/CustomHooks/useIsPhone'
import useShimmer from 'components/CustomHooks/useShimmer'
import Layout from 'components/Layout'
import Image from 'next/image'
import TYPO from 'constants/typography'
import Link from 'next/link'
import { CERTIFICATIONS_LIST } from 'constants/certifications'

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
  margin-top: 30px;
`

const StyledIssueTitle = styled.h2`
  margin-bottom: 20px;
  padding-bottom: 10px;
  color: var(--thnkrn-blue);
  border-bottom: 1px solid var(--thnkrn-blue);
`

const StyledListWrapper = styled.div`
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`

const StyledImage = styled.div`
  width: 100%;
`

const StyledDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;

  .fancy {
    color: var(--thnkrn-pink);
    margin-top: 5px;
  }
`

const Certifications = () => {
  const { isPhone, fetchDevice } = useIsPhone()

  const shimmer = useShimmer(1600, 1200)

  useEffect(() => {
    fetchDevice()
  }, [fetchDevice])

  return (
    <Layout>
      <StyledContainer>
        <StyledPageTitle className={TYPO.h1}>My Certifications</StyledPageTitle>
        {CERTIFICATIONS_LIST.map((list) => (
          <StyledWrapper key={list.issuing}>
            <StyledIssueTitle className={TYPO.h2}>{list.issuing}</StyledIssueTitle>
            <StyledListWrapper>
              {list.cerList.map((cer) => (
                <div key={cer.name}>
                  <Link href={cer.link}>
                    <a target="_blank">
                      <StyledImage>
                        <Image
                          src={`/images/certifications/${cer.img}.png`}
                          width={1600}
                          height={1200}
                          layout="responsive"
                          sizes={isPhone ? '80vw' : '30vw'}
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${shimmer}`}
                        />
                      </StyledImage>
                      <StyledDescWrapper>
                        <span className={TYPO.body2}>{cer.name}</span>
                        <span className={TYPO.fancy}>Issued {cer.issuedDate}</span>
                      </StyledDescWrapper>
                    </a>
                  </Link>
                </div>
              ))}
            </StyledListWrapper>
          </StyledWrapper>
        ))}
      </StyledContainer>
    </Layout>
  )
}

export default Certifications
