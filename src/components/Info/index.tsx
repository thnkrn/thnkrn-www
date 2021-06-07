import { styled } from '@compiled/react'
import TYPO from 'constants/typography'

const StyledContainer = styled.div`
  @media screen and (max-width: 480px) {
    margin: 40px 0;
  }

  margin: 60px 120px;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .body2 {
    :not(:first-of-type) {
      margin-top: 10px;
    }
  }
`

const Info = () => (
  <StyledContainer>
    <StyledWrapper>
      <span className={TYPO.body2} style={{ color: '#88b1b3' }}>
        Cheers,
      </span>
      <span className={TYPO.body2}>
        I'm a Software Engineer who passionate on web development or you can call me as 'Webmaster'
        which is based on React ecosystem. I'm working on a fancy landing page, SEO, security,
        performance, DevOps, and followed by the optimization part that I'm mostly crazy on it. And
        now, as a Fullstack Developer, I'm also working on the Backend stuff, and Database too.
      </span>
      <span className={TYPO.body2}>
        Moreover, I'm usually opened and interested in new tech stacks and I would like to use and
        test it ASAP. I'm also free to listen and like to discuss about the new tech stacks and how
        comes it is awesome with my teammates.
      </span>
      <span className={TYPO.body2}>
        Lastly, I'm a fast learner and open to every avenue that comes to me. And I'm eager to learn
        a new things very much!
      </span>
    </StyledWrapper>
  </StyledContainer>
)

export default Info
