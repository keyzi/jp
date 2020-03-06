//import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import data from './data/cards.json';
import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

class Arr extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }  

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  
  render() {
    const { characters } = this.state

    

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  );
}



class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: false,
      toggle: false,
      randSmb: this.getRandomInt(0,2),
      //letter: 'a'
      result: Object.keys(data.symbols).map((key) => data.symbols[key]),
      letter: '',
      active: '',
      i:0
      //letter: result[randSmb].text
      //letterE: this.result[this.state.randSmb].jcode
    };
    this.state.letter = this.state.result[this.state.randSmb].jcode;
    //const {result} = Object.keys(data.symbols).map((key) => data.symbols[key]);
    //var letter = ''
    //this.setState({ letter: result[0].jcode })
    //this.letter = result[this.state.randSmb].jcode;
    //this.result = Object.keys(data.symbols).map((key) => data.symbols[key]);
    //this.letter = this.result[this.state.randSmb].text;
    //this.sym = this.result[this.state.randSmb].jcode;
    //this.rotatingDone = this.rotatingDone.bind(this);
    //this.flipped = false;
  }

  changeLetter() {
    //const { letter } = this.state
  
    this.setState({
      letter: this.state.result[this.state.randSmb].text
    })
    console.log(1);
  }
 

  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  next() {
    //var a = this.getRandomInt(0,2);
    this.state.randSmb = this.getRandomInt(0,2);
    let i = this.state.i > 0 ? 0 : 1;
    //this.state.letter = this.state.result[this.state.randSmb].jcode;
    //console.log(this.state.result[this.state.randSmb].jcode+' '+this.state.letter);
    console.log(this.state.active);
    if (this.state.active == 'flip-container-hover') {
      
      //this.toggleClass();  
      
      this.setState({
        active:''          
      },
      ()=>{
        setTimeout(()=>{
          console.log('000');
          this.setState({i:i})},800);
      });
    }
    else {
    
      this.setState({i:i})
    }
  }
  
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: this.state.active=='flip-container-hover' ? '' : 'flip-container-hover' });
    console.log(4)
  };

  changeJ(){
    this.setState({randSmb: this.getRandomInt(0,2)});
    console.log(this.state.randSmb)
  }
  render() {
    const { rotate, toggle, randSmb, result ,i} = this.state;
    var sym = result[randSmb].jcode;
    
    return (
      <div>
      <div className={'flip-container ' +this.state.active} onClick={
        
        //this.toggleClass.bind(this),
        
        ()=> { this.toggleClass(); this.changeJ() }
        //this.changeJ.bind(this)
        //() => this.changeJ()
      }>  
      <div className='flipper' 
        //onClick = {this.changeLetter.bind(this)}
        //onClick = {this.onPress}
        //onClick={() => sym = '1'}
        //this.onPress
                        //this.setState({ rotate: rotate == "back" ? "front" : "back" }),
                       //this.setState({sym : sym == this.result[randSmb].jcode ? this.result[randSmb].text : this.result[randSmb].jcode})
      //}
        //className={rotate}
        
      >
      <div className='front'>
        {result[i].jcode}
		  </div>
		  <div className='back'>
			  
        {result[i].text}
		  </div>        
      

      </div>
      </div>
      <div style={{padding: "30px"}}>

        <button onClick = {this.next.bind(this)}>Next</button>
      </div> 


      </div>
    );
  }  
}

function App() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const sym = data.symbols;
  const randSmb = getRandomInt(0,2);
  //const name = names[randKey];
  //var data = JSON.parse(data.books);
  //const book = data.books;
  const result = Object.keys(sym).map((key) => sym[key]);


  return (

    <div className="App">
      <header className="App-header">
        <Image />
      </header>
    </div>
  );
}

export default App;
