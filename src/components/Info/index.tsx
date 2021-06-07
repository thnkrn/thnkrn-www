import { styled } from '@compiled/react'
import TYPO from 'constants/typography'

const StyledContainer = styled.div`
  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 40px 20px;
  }

  @media screen and (max-width: 480px) {
    margin: 40px 0 !important;
  }

  margin: 60px 120px;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  text-align: justify;

  .body2 {
    :not(:first-of-type) {
      margin-top: 10px;
    }
  }
`

const Info = () => (
  <StyledContainer>
    <StyledWrapper>
      <span className={TYPO.body2} style={{ color: 'var(--thnkrn-blue)' }}>
        Cheers,
      </span>
      <span className={TYPO.body2}>
        I'm a Software Engineer who passionate about web development or you can call me 'Webmaster'
        which is based on React ecosystem. I'm working on a fancy landing page, SEO, security,
        performance, DevOps, and followed by the optimization part that I'm mostly crazy about it.
        And now as a Fullstack Developer, I'm also working on the Backend stuff, and Database too.
      </span>
      <span className={TYPO.body2}>
        Moreover, I'm usually opened and interested in new tech stacks and I would like to try it
        ASAP. I'm also free to listen and discuss the new tech stacks and how it is awesome with my
        teammates.
      </span>
      <span className={TYPO.body2}>
        Lastly, I'm a fast learner and open to every avenue that comes to me. And I'm eager to learn
        new things very much!
      </span>
    </StyledWrapper>
  </StyledContainer>
)

export default Info
