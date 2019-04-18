import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

//Allow - Control - Allow - Origin: *
class App extends Component {
  doSearch = () => {
    let x = Math.random();
    let num = Math.round(x * 100);
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <header className="App-header">
          
        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="360" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          <p>Choose your house!</p>
          <Button variant="contained" >Add to Database</Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/169")}> House Greyjoy
                </Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/229")}> House Lannister
                </Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/362")}> House Stark
                </Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/378")}> House Targaryen
                </Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/398")}> House Tyrell
                </Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/7")}> House Arryn
                </Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/285")}> House Martell
                </Button>
          <br />
          <Button variant="contained" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/17")}> House Baratheon
                </Button>
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
