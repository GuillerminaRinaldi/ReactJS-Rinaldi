import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListConteiner texto = "Lo importante no es que vengas sino que vuelvas"/>
    </>
  )
}

export default App
