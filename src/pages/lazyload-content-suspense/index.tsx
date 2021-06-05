import { styled } from '@compiled/react'
import Layout from 'components/Layout'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const DynamicContent = dynamic(() => import('components/LazyContent'), { ssr: false })

// react.Suspense not support SSR yet
const isServer = () => typeof window === 'undefined'

const H1 = styled.h1`
  font-weight: bold;
`

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => {
  const [isShowContent, setIsShowContent] = useState(false)
  return (
    <Layout noHeader noFooter>
      {!isServer() && (
        <>
          <H1>Lazyload content suspense</H1>
          <button onClick={() => setIsShowContent(!isShowContent)}>
            {!isShowContent ? 'Show content' : 'Hide content'}
          </button>
          <Suspense fallback={<StyledLoader>Loading...</StyledLoader>}>
            {isShowContent && <DynamicContent />}
          </Suspense>
        </>
      )}
    </Layout>
  )
}

export default IndexPage
