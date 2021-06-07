import Banner from 'components/Banner'
import useIsPhone from 'components/Custom-hooks/useIsPhone'
import Experience from 'components/Experience'
import Info from 'components/Info'
import Layout from 'components/Layout'
import { useEffect } from 'react'

const IndexPage = () => {
  const { isPhone, fetchDevice } = useIsPhone()

  useEffect(() => {
    fetchDevice()
  }, [fetchDevice])

  return (
    <Layout>
      <Banner isPhone={isPhone} />
      <Info />
      <Experience />
    </Layout>
  )
}

export default IndexPage
