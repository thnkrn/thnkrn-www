import ImageWrapper from 'components/ImageWrapper'
import Layout from 'components/Layout'
import TYPO from 'constants/typography'
import Img from 'react-optimized-image'

const IndexPage = () => (
  <Layout noHeader noFooter>
    <h1 className={TYPO.h1}>Image Static Site</h1>
    <ImageWrapper width={1920} height={1080}>
      <Img
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        src={require('public/images/mock-img.png')}
        sizes={[400, 500, 700, 900]}
        breakpoints={[599, 1000, 1599]}
        loading="lazy"
        width="100%"
        height="auto"
      />
    </ImageWrapper>
  </Layout>
)

export default IndexPage
