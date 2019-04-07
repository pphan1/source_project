import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
//Allow - Control - Allow - Origin: *
class App extends Component {
    doSearch = () => {
        let x = Math.random();
        let num = Math.round(x*100);
        console.log(num);
        let link = "https://www.anapioficeandfire.com/api/characters/"
        link += num;
        console.log(link);
        axios
            .get(link)
            .then(response => {
                console.log(response.data);
                //console.log(response.data.collection.items[3].links[0].href);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        console.log('HI');

    return (
      <div className="App">
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={() => this.doSearch()}> Add to database
                </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
