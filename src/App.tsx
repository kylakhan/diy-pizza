import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import DIYPizzaComponent from './DIYPizzaApp/DIYPizzaComponent'

function App() {
    let value: number = 100
    return (

        <div className="App">
            <DIYPizzaComponent></DIYPizzaComponent>
        </div>)
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
