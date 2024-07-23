import React from 'react'
import {Clients,Navbar} from './components'
import {Customers,Footer,Header,Howtodesign,Community,Marketing,Pixelgrade,Helping} from './containers'
import './App.css'
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
