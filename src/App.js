import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostFrom from './PostForm'
import AllPost from './AllPost';


function App() {
  return (
    <div className="App">
       <div className="navbar">
        <h2 className="center ">Post It</h2>
        </div>
      <PostFrom/>
      <AllPost/>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
