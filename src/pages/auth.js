
import React from 'react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Layout from '../components/layout'

const Auth = () => (
  <Layout>
    <div>
      <AmplifyAuthenticator>
        <h1>auth</h1>
        <AmplifySignOut />
      </AmplifyAuthenticator>
    </div>
  </Layout>
)
export default Auth