import React from 'react'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const NotFoundPage = props => (
  <Layout path={props.location.pathname}>
    <BG />
    <SEO title="404: Not found" path={props.location.pathname} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
