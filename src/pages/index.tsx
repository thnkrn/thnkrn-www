import Banner from 'components/Banner'
import useIsPhone from 'components/CustomHooks/useIsPhone'
import EXED from 'components/EXED'
import Info from 'components/Info'
import Layout from 'components/Layout'
import { EDUCATION } from 'constants/education'
import { EXPERIENCE } from 'constants/experience'
import { ICONS } from 'constants/icons'
import { useEffect } from 'react'

const IndexPage = () => {
  const { isPhone, fetchDevice } = useIsPhone()

  useEffect(() => {
    fetchDevice()
  }, [fetchDevice])

  // test
  return (
    <Layout>
      <Banner isPhone={isPhone} />
      <Info />
      <EXED title="Experience" content={EXPERIENCE} icon={ICONS.work} />
      <EXED title="Education" content={EDUCATION} icon={ICONS.education} />
    </Layout>
  )
}

export default IndexPage
