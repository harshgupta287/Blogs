import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import { RouteIndex } from "./helpers/RouteName"
import Index from "./pages/index"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
