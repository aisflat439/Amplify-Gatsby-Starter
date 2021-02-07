import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn()) {
    navigate(`/auth/`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute