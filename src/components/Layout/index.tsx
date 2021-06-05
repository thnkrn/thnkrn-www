import { styled } from '@compiled/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
  title?: string
  noHeader?: boolean
  noFooter?: boolean
}

const StyledContainer = styled.div`
  margin: auto;
  width: 80%;
  max-width: 720px;
`

const Layout = ({
  children,
  title = `THNKRN's playground`,
  noHeader = false,
  noFooter = false,
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {!noHeader && <Header />}

    <StyledContainer>{children}</StyledContainer>

    {!noFooter && <Footer />}
  </>
)

export default Layout
