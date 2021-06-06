import { styled } from '@compiled/react'
import Icon from 'components/Common/Icon'
import { CONTACT_LIST } from 'constants/contact'
import TYPO from 'constants/typography'

const StyledFooter = styled.footer`
  color: white;
  margin-top: 80px;
  text-align: center;
  border-top: 1px solid #fff;
  padding: 20px;
`

const StyledContactWrapper = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 20px;
  }

  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const StyledContactList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 3px 0 0 10px;
  }

  &:not(:first-child) {
    @media screen and (max-width: 480px) {
      margin: 20px 0 0 !important;
    }

    margin-left: 50px;
  }
`

const Footer = () => (
  <StyledFooter>
    <StyledContactWrapper>
      {CONTACT_LIST.map((list) => (
        <StyledContactList key={list.title}>
          <Icon src={list.icon} />
          {list.isLink ? (
            <span className={TYPO.contact}>
              <a href={list.link}>{list.title}</a>
            </span>
          ) : (
            <span className={TYPO.contact}>{list.title}</span>
          )}
        </StyledContactList>
      ))}
    </StyledContactWrapper>
  </StyledFooter>
)

export default Footer
