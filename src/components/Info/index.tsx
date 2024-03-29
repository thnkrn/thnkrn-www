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
        I'm a Software Engineer who works as a full-stack developer. I'm passionate about web
        development based on React ecosystem and have a deep love for the NextJS framework.
        Furthermore, I'm coding on the Golang to create the backend enterprise-grade system by
        applying clean architecture.
      </span>
      <span className={TYPO.body2}>
        I'm paying attention the most to developer experience like writing clean, composable, and
        maintainable code as world-class products for both internal and external customers. Also, I
        really care about the processes, high quality of code and products, and aesthetics.
      </span>
      <span className={TYPO.body2}>
        Moreover, I'm a tech-savvy guy, who is always curious and excite about new technology
        stacks. I'm also like to learn, listen, and discuss tech things with my teammates.
      </span>
      <span className={TYPO.body2}>
        Lastly, I'm a fast learner and open to every avenue that comes to me. And I'm eager to learn
        new things very much!
      </span>
    </StyledWrapper>
  </StyledContainer>
)

export default Info
