import { styled } from '@compiled/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Nav = styled.nav`
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

  const changeNavBG = () => {
    if (window.scrollY >= 50) {
      setIsNavScroll(true)
    } else {
      setIsNavScroll(false)
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', changeNavBG)

      return () => {
        window.removeEventListener('scroll', changeNavBG)
      }
    }
  }, [changeNavBG])

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
