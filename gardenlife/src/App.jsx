import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from '../pages/components/Home'
import  Router  from '../router/Router'

function App() {
  return (
    <>
    <Router>
       <Home/>
    </Router>
 
    </>
  )
}

export default App
