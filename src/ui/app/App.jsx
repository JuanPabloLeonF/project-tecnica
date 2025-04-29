import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProviderApp } from "../../domain/context/app/ProviderApp"
import { Main } from "../pages/main/Main"

export const App = () => {

  return (
    <>
      <ProviderApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product/:id" element={<div>Pagina del producto</div>} />
          </Routes>
        </BrowserRouter>
      </ProviderApp>
    </>
  )
}