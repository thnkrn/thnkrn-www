import { styled } from '@compiled/react'
import Layout from 'components/Layout'

const H1 = styled.h1`
  font-weight: bold;
`

const Playground = () => (
  <Layout noFooter>
    <H1>Playground!</H1>
    <span>Welcome to my playground</span>
  </Layout>
)

export default Playground
