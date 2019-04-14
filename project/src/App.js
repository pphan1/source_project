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

    houseLookup = houseLink => {
        axios
            .get(houseLink)
            .then(response => {
                console.log(response.data);
                let swornChars = response.data.swornMembers.length;
                console.log();
                let x = Math.random();
                let num = Math.round(x * swornChars);
                let character = response.data.swornMembers[num];
                //console.log(response.data.collection.items[3].links[0].href);
                axios
                    .get(character)
                    .then(response => {
                        console.log(response.data.name);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });


    }

    render() {
        

    return (
      <div className="App">
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={() => this.doSearch()}> Add to database
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/169")}> House Greyjoy
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/229")}> House Lannister
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/362")}> House Stark
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/378")}> House Targaryen
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/398")}> House Tyrell
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/7")}> House Arryn
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/285")}> House Martell
                </button>
                <button onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/17")}> House Baratheon
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
