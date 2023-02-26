import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import './App.css'; //component level style sheet

// JSX, not html, the className is the tell
// JSX -> the js extension XML(Extensible Markup lang), we use it to help define the DOM Tree
// we use component to define the user interface written in JSX
// a component is fn that taks data as input, and returns a user interface
//F(D) => UI

//you can only return one expression from a js fn, e.g. cannot add another div in addition to App, 
//but can create one big div, include divs inside big div

/*
 const playerData = {
  which Player: 'X',
  wins: 10
 };

 Player(playerData);
 */

function App() {
  return (
    <div className="App"> 
     <Header/>
     <section>
     <Player whichPlayer="X" wins={10}/>
     <Player whichPlayer="O" wins="8"/>
     </section>
     <Board/>
    </div>
  );
}


export default App;
