import { styled } from '@compiled/react'
import Layout from 'components/Layout'
import TYPO from 'constants/typography'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const DynamicContent = dynamic(() => import('components/LazyContent'), { ssr: false })

// react.Suspense not support SSR yet
const isServer = () => typeof window === 'undefined'

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
          <h1 className={TYPO.h1}>Lazyload content suspense</h1>
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
