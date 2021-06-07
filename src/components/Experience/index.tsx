import { styled } from '@compiled/react'
import Icon from 'components/Common/Icon'
import { EXPERIENCE } from 'constants/experience'
import { ICONS } from 'constants/icons'
import TYPO from 'constants/typography'

const StyledContainer = styled.div`
  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 60px 20px;
  }

  @media screen and (max-width: 480px) {
    margin: 40px 0 !important;
  }

  margin: 100px 50px;
`

const StyledWrapper = styled.div`
  margin-top: 30px;
`

const StyledTitle = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    span {
      margin: 0 !important;
    }
  }

  display: flex;
  align-items: center;

  span {
    margin: 3px 0 0 15px;
  }

  .fancy {
    color: var(--thnkrn-dark-blue);
  }
`

const StyledDetail = styled.div`
  @media screen and (max-width: 480px) {
    margin: 0 !important;
  }

  margin: 15px 0 0 38px;
`

const StyledCompany = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 15px;

    .fancy {
      margin-left: 0 !important;
    }
  }

  .body1 {
    color: var(--thnkrn-blue);
  }

  .fancy {
    margin-left: 15px;
    color: var(--thnkrn-dark-blue);
  }
`

const StyledDesc = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 15px;
    text-align: justify;
    white-space: pre-line;
  }

  display: flex;
  flex-direction: column;

  span {
    margin-top: 15px;
  }
`

const Experience = () => (
  <StyledContainer>
    <h2 className={TYPO.h2}>Experience</h2>
    {EXPERIENCE.map((job) => (
      <StyledWrapper key={job.title}>
        <StyledTitle>
          <Icon src={ICONS.work} />
          <span className={TYPO.body1}>{job.title}</span>
          <span className={TYPO.fancy}>{job.duration}</span>
        </StyledTitle>
        <StyledDetail>
          <StyledCompany>
            <span className={TYPO.body1}>{job.company}</span>
            <span className={TYPO.fancy}>{job.type}</span>
          </StyledCompany>
          <StyledDesc className={TYPO.body2}>
            {job?.desc.map((data) => (
              <span key={data}>{data}</span>
            ))}
          </StyledDesc>
        </StyledDetail>
      </StyledWrapper>
    ))}
  </StyledContainer>
)

export default Experience
