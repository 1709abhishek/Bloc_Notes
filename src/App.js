import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';


function App() {

  const [Notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map((noteItem, i) => {
        return <Note key={i} id={i} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;


