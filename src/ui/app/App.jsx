import './App.css'
import { ProviderApp } from "../../domain/context/app/ProviderApp"
import { Main } from "../pages/main/Main"

export const App = () => {

  return (
    <>
      <ProviderApp>
        <Main />
      </ProviderApp>
    </>
  )
}