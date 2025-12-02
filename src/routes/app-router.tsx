import { Layout } from "@/components/layout"
import { Home } from "@/pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom" 

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}