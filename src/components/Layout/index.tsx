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
  width: 85%;
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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    {!noHeader && <Header />}

    <StyledContainer>{children}</StyledContainer>

    {!noFooter && <Footer />}
  </>
)

export default Layout
