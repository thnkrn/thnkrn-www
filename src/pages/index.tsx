import { styled } from '@compiled/react'
import Layout from 'components/Layout'

const H1 = styled.h1`
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <H1>Hola!</H1>
    <span>Welcome to my play ground</span>
  </Layout>
)

export default IndexPage
