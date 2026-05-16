import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Demo from './Component/Demo'
import Props from './Component/props'
import Exp7Count from './Component/Exp7Count'
import UseState from './HOOKS/UseState';
import UseEffect from './HOOKS/UseEffect'


function App() {
 // const [count, setCount] = useState(0)
 const name="ABES COLLEGE"

  return (
    <>
      <h1>Welcome to react</h1>
      <h2>Hello {name}</h2>
      <Demo/>
      <Props/>
    <Exp7Count HeadingText="Shreyansh" />
  <UseState />
  <UseEffect/>

      



    </>
  )
}

export default App;
