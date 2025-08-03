import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import { RouteIndex, RouteSignIn, RouteSignUp } from "./helpers/RouteName"
import Index from "./pages/index"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>

        <Route path={RouteSignIn} element={<SignIn />} />
        <Route path={RouteSignUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
