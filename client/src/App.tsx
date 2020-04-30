import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import DIYPizza from './DIYPizzaApp/DIYPizza'

function App() {
    let value: number = 100
    return (

        <div className="App">
            <DIYPizza/>
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
