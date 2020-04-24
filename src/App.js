import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Note title='This is the note title' content='This is the note content' />
        <Footer />
      </div>
    )
  }
}

export default App

