import { styled } from '@compiled/react'
import Link from 'next/link'

const Nav = styled.nav`
  margin: auto;
  width: 80%;
  position: sticky;
  top: 0;
  margin: 32px auto 0;
  padding: 12px 0;
  background-color: black;

  &::after {
    content: '';
    width: 100%;
    height: 80px;
    background: linear-gradient(180deg, black 50%, hsla(0, 0%, 100%, 0));
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
  }
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  z-index: 1;
`

const StyledTitle = styled.span`
  flex: 1;
`

const StyledLinkWrapper = styled.div`
  flex: 1;
  text-align: end;
`

const StyledLink = styled.span`
  a {
    text-decoration: none;
    color: white;
  }
`

const Header = () => (
  <Nav>
    <StyledContainer>
      <StyledTitle>THNKRN's playgroud</StyledTitle>
      <StyledLinkWrapper>
        <StyledLink>
          <Link href="/">
            <a>Home</a>
          </Link>
        </StyledLink>
        &nbsp;/&nbsp;
        <StyledLink>
          <Link href="/Playground">
            <a>Playground</a>
          </Link>
        </StyledLink>
      </StyledLinkWrapper>
    </StyledContainer>
  </Nav>
)

export default Header
