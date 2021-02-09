import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>This is inspired by https://github.com/aws-samples/aws-amplify-gatsby-auth.</p>
    <p>Welcome to your new Gatsby site with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    <p>Create a new account: <Link to="/app/home">Sign Up</Link></p>
    <Link to="/app/home">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </>
)

export default IndexPage
