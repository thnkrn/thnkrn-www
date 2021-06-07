import { styled } from '@compiled/react'
import Icon from 'components/Common/Icon'
import TYPO from 'constants/typography'

interface Props {
  title: string
  content: any
  icon: string
}

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
      margin-left: 0 !important;
    }
  }

  display: flex;
  align-items: center;

  span {
    margin-left: 15px;
  }

  .fancy {
    color: var(--thnkrn-pink);
    margin-top: 5px;
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
    color: var(--thnkrn-pink);
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

const EDEX = ({ title, content, icon }: Props) => (
  <StyledContainer>
    <h2 className={TYPO.h2}>{title}</h2>
    {content.map((data: any) => (
      <StyledWrapper key={data.title}>
        <StyledTitle>
          <Icon src={icon} />
          <span className={TYPO.body1}>{data.title}</span>
          <span className={TYPO.fancy}>{data.duration}</span>
        </StyledTitle>
        <StyledDetail>
          <StyledCompany>
            <span className={TYPO.body1}>{data.location}</span>
            <span className={TYPO.fancy}>{data.type}</span>
          </StyledCompany>
          <StyledDesc className={TYPO.body2}>
            {data?.desc.map((list: string) => (
              <span key={data}>{list}</span>
            ))}
          </StyledDesc>
        </StyledDetail>
      </StyledWrapper>
    ))}
  </StyledContainer>
)

export default EDEX
