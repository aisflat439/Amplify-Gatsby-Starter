import React from "react"
import { Router } from "@reach/router"
import Details from "../components/Details"
import Home from "../components/Home"
import Auth from "./auth"
import PrivateRoute from "../components/PrivateRoute"


const App = () => (
  <>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/profile" component={Details} />
      <Auth path="/auth" />
    </Router>
  </>
)

export default App