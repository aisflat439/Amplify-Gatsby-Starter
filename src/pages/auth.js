
import React from 'react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const Auth = () => (
  <>
    <AmplifyAuthenticator>
      <h1>auth</h1>
      <AmplifySignOut />
    </AmplifyAuthenticator>
  </>
)
export default Auth