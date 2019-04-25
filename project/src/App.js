import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

//Allow - Control - Allow - Origin: *
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: '',
      crest: "https://image.flaticon.com/icons/png/512/17/17200.png"
    }
  }
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
            const charName = response.data.name;
            const url = response.data.url;
            //console.log(url[49:])
            this.setState({
              charName,
              //if (url= )
              //crest: ''
            });
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

        <img src={this.state.crest} width="240" height="240"/>
          <p>Choose your house!</p>
          <p>Character: {this.state.charName}</p>
      
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/169")}> 
          <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836" height="40"></img>
          House Greyjoy
                </Button>
          <br />
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/229")}>
            <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest?cb=20170101095357" height="40" />
            House Lannister
                </Button>
          <br />
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/362")}>
            <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142" height="40" />
            House Stark
                </Button>
          <br />
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/378")}>
            <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20181113055101" height="40" />
            House Targaryen
                </Button>
          <br />
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/398")}> 
          <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest?cb=20170108163035" height="40"></img>
          House Tyrell
                </Button>
          <br />
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/7")}> 
          <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153" height="40"/>
          House Arryn
                </Button>
          <br />
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/285")}> 
          <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest?cb=20170523024859" height="40"/>
          House Martell
                </Button>
          <br />
          <Button variant="contained" size="large" onClick={() => this.houseLookup("https://www.anapioficeandfire.com/api/houses/17")}> 
          <img style={{ marginRight: 11 }} src="https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924" height="40"/>
          House Baratheon      
                </Button>
          <br/>
        </header>
      </div>
    );
  }
}

export default App;
