import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CreateArea />
        <Note title='This is the note title' content='This is the note content' />
        <Footer />
      </div>
    )
  }
}

export default App

