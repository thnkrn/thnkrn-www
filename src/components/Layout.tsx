import { styled } from '@compiled/react'
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
  noHeader?: boolean
  noFooter?: boolean
}

const Header = styled.header`
  margin-bottom: 20px;
`

const Footer = styled.footer`
  margin-top: 20px;
`

const Layout = ({
  children,
  title = 'This is the default title',
  noHeader = false,
  noFooter = false,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {!noHeader && (
      <Header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
        </nav>
      </Header>
    )}

    {children}

    {!noFooter && (
      <Footer>
        <hr />
        <span>Footer Here</span>
      </Footer>
    )}
  </div>
)

export default Layout
