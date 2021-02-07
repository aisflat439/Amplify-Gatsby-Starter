import React from "react"
import { navigate } from "@reach/router"
import { isLoggedIn } from "../utils/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn()) {
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute