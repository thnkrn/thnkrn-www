import { styled } from '@compiled/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Nav = styled.nav`
  @media screen and (max-width: 480px) {
    margin-bottom: 60px;
  }

  margin: auto;
  position: sticky;
  top: 0;
  padding: 20px;
  background-color: black;
  z-index: 1;
  transition: background-color 0.7s ease;
  border-bottom: 1px solid white;
  margin-bottom: 80px;

  &.active {
    background-color: rgb(29, 29, 31);
  }

  &::after {
    content: '';
    width: 100%;
    height: 70px;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
  }
`

const StyledContainer = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  z-index: 1;

  a {
    &:hover {
      text-decoration: none;
    }
  }
`

const StyledTitle = styled.span`
  flex: 1;
`

const StyledLinkWrapper = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }

  flex: 1;
  text-align: end;
`

const StyledLink = styled.span`
  a {
    &:hover {
      color: #36363a;
    }
  }
`

const Header = () => {
  const [isNavScroll, setIsNavScroll] = useState(false)

  /* istanbul ignore next */
  useEffect(() => {
    const changeNavBG = () => {
      if (window.scrollY >= 50) {
        setIsNavScroll(true)
      } else {
        setIsNavScroll(false)
      }
    }

    if (window) {
      window.addEventListener('scroll', changeNavBG)

      return () => {
        window.removeEventListener('scroll', changeNavBG)
      }
    }

    return () => {}
  }, [])

  return (
    <Nav className={isNavScroll ? 'active' : ''}>
      <StyledContainer>
        <StyledTitle>
          <Link href="/">
            <a>THNKRN</a>
          </Link>
        </StyledTitle>
        <StyledLinkWrapper>
          <StyledLink>
            <Link href="/">
              <a>Home</a>
            </Link>
          </StyledLink>
          &nbsp;|&nbsp;
          <StyledLink>
            <Link href="/Certifications">
              <a>Certifications</a>
            </Link>
          </StyledLink>
          &nbsp;|&nbsp;
          <StyledLink>
            <Link href="/Playground">
              <a>Playground</a>
            </Link>
          </StyledLink>
        </StyledLinkWrapper>
      </StyledContainer>
    </Nav>
  )
}

export default Header
