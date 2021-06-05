import Layout from 'components/Layout'
import TYPO from 'constants/typography'

const Typography = () => (
  <Layout>
    <h1 className={TYPO.h1}>Typography!</h1>
    <h1 className={TYPO.h1}>Hola!</h1>
    <h2 className={TYPO.h2}>Hola!</h2>
    <div className={TYPO.subtitle1}>Hola!</div>
    <div className={TYPO.subtitle2}>Hola!</div>
    <div className={TYPO.body1}>Hola!</div>
    <div className={TYPO.body2}>Hola!</div>
  </Layout>
)

export default Typography
