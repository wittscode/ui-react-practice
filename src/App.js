import React, {useState} from 'react';
import './App.css';
import data from './data';
import List from './List';

function App() {
  const  [people, setPeople] = useState(data);
  return (
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={()=> setPeople([])}>Clear All</button>
    </section>
  </main>
  )
}

export default App;

// Todo
// 1: Change the Color / Shadow / etc to look better
// 2: add hover animation to clear all button
// 3: change data to something from the movies 
// 4: Cool ideas: UI for Movies Tasks (JTBD with User Stories)
