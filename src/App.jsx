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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={LogoApp} className="logo" alt="Logo App" />
        </a>
      </div>
      <h1>Proyecto E-commerce Rinaldi</h1>
      <div className="card">
        <Button />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <NavBar />
      <ItemListConteiner texto="Lo importante no es que vengas sino que vuelvas"/>
    </>
  )
}

export default App
