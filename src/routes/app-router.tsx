import { Layout } from "@/components/layout"
import { Login } from "@/pages/login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from "./routes"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route element={<Layout />}>
          {routes.map(({ route, component: Component }) => {
            return (
              <Route path={route} element={<Component />} />
            )
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}