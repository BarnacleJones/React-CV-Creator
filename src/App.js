import './App.css';
import React from 'react';
import General from './components/General';

class App extends React.Component {

  constructor() {
    //inherits all properties of react.component?
    super();
    //set properties of state
    this.state = {
        name: ['', true],
        email: ['', true],
        phone: ['', true],
        linkedin: ['', true],
        github: ['', true],            
      } 
  }

  //Generic onSubmit function for <General> components
  //used this below to work out how to use variables for setState
  //https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
  onSubmit(e)
  {
    e.preventDefault();
    //get value of textbox
    let value = e.target.children[1].value;
    //get value of the label (made lower case, uppers dont work?)
    var item = e.target.children[0].firstChild.nodeValue.toLowerCase();
    //use these values to create an object, updating the state 
    if(this.state[item][1])
    {
    this.setState({[item]: [value, false]});
    }
    else{this.setState({[item]: [value, true]});   
  }}

  render()
  {return(<div className="App">
      <h1>CV App</h1>
      <div>
      {/* Form area */}
      <General field="Name" onSub={this.onSubmit.bind(this)} editMode={this.state.name[1]} name={this.state.name[0]} />
      <General field="Email" onSub={this.onSubmit.bind(this)} editMode={this.state.email[1]} name={this.state.email[0]}/>
      <General field="Phone" onSub={this.onSubmit.bind(this)} editMode={this.state.phone[1]} name={this.state.phone[0]}/>
      {/* Live CV preview */}
      </div>
      <hr></hr>
      <div className="cvSection">
      <h1>CV Preview:</h1><hr></hr>
      <h1 id="CV_name">Name: {this.state.name}</h1>
      <h1 id="email">Email: {this.state.email}</h1>
      <h1 id="CV_phone">Phone: {this.state.phone}</h1>
      </div>
    </div>)
  }
}

export default App;