import React from 'react'
import RouterApp from './RouterApp'
import NavBar from './components/navBar/NavBar'
function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <RouterApp />
      </main>
    </>
  )
}
export default App