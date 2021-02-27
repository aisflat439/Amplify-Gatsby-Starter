import React from "react"
import { render } from "@testing-library/react"

import IndexPage from "."
import { isLoggedIn } from "../utils/auth"

jest.mock('../components/seo', () => () => 'TEST_SEO');
jest.mock('../utils/auth', () => ({
  isLoggedIn: jest.fn()
}))

describe("<IndexPage />", () => {
  const setup = overrides => {
    const props = {
      ...overrides
    }

    const R = render(<IndexPage {...props} />)

    return {
      ...R,
      props
    }
  }

  it("renders sign up when not authenticated", () => {
    const { getByText } = setup();

    expect(getByText(/sign up/i)).toBeInTheDocument()
  })

  it("renders sign in when not authenticated", () => {
    const { getByText } = setup();

    expect(getByText(/sign in/i)).toBeInTheDocument()
  })

  it("renders Home when authenticated", () => {
    isLoggedIn.mockReturnValueOnce(true)
    const { getByText } = setup();

    expect(getByText(/Home/i)).toBeInTheDocument()
  })

  it("renders sign in when not authenticated", () => {
    isLoggedIn.mockReturnValueOnce(true)
    const { getByText } = setup();

    expect(getByText(/profile/i)).toBeInTheDocument()
  })
})