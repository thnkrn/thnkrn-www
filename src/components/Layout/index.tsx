import { styled } from '@compiled/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
  title?: string
  desc?: string
  noHeader?: boolean
  noFooter?: boolean
}

const StyledContainer = styled.div`
  margin: auto;
  width: 90%;
`

const Layout = ({
  children,
  title = `THNKRN's website`,
  desc = 'My personal information, experience and playground',
  noHeader = false,
  noFooter = false,
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    {!noHeader && <Header />}

    <StyledContainer>{children}</StyledContainer>

    {!noFooter && <Footer />}
  </>
)

export default Layout
