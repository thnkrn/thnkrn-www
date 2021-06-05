import { styled } from '@compiled/react'
import Layout from 'components/Layout'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const DynamicContent = dynamic(() => import('components/LazyContent'))

const H1 = styled.h1`
  font-weight: bold;
`

const IndexPage = () => {
  const [isShowContent, setIsShowContent] = useState(false)
  return (
    <Layout noHeader noFooter>
          <H1>Lazyload content suspense</H1>
          <button onClick={() => setIsShowContent(!isShowContent)}>
            {!isShowContent ? 'Show content' : 'Hide content'}
          </button>
            {isShowContent && <DynamicContent />}
    </Layout>
  )
}

export default IndexPage
