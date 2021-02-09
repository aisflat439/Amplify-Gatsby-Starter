
import React from 'react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Layout from '../components/layout'

const Auth = () => (
  <Layout>
    <AmplifyAuthenticator>
      <h1>auth</h1>
      <AmplifySignOut />
    </AmplifyAuthenticator>
  </Layout>
)
export default Auth