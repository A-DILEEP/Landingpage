import React from 'react'
import {Clients,Navbar,Helping} from './components'
import {Customers,Footer,Header,Howtodesign,Community,Marketing,Pixelgrade} from './containers'
import './app.css'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Clients/>
      <Community/>
      <Pixelgrade/>
      <Helping/>
      <Howtodesign/>
      <Customers/>
      <Marketing/>
      <Footer/>
    </div>
  )
}

export default App
