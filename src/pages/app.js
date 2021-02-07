import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Details from "../components/Details"
import Home from "../components/Home"
import Auth from "./auth"
import PrivateRoute from "../components/PrivateRoute"


const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/profile" component={Details} />
      <Auth path="/auth" />
    </Router>
  </Layout>
)

export default App