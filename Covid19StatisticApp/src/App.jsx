import './App.css'

import NavBar from './components/NavBar/NavBar'
import Statistic from './components/Statistic/Statistic'

//KONTEKSTI
import CasesContextProvider from './context/casesContext'

function App() {

  return (
    <>
      <CasesContextProvider>
        <NavBar />
        <Statistic />
      </CasesContextProvider>
    </>
  )
}

export default App
