import './App.css';
import React from 'react';
import General from './components/General';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '' ,            
      } 
  }

  //Generic onSubmit function for <General> components
  //https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
  onSubmit(e)
  {
    e.preventDefault();
    //get value of textbox
    let value = e.target.children[1].value;
    //get value of the label (made lower case, uppers dont work?)
    var item = e.target.children[0].firstChild.nodeValue.toLowerCase();
    //use these values to create an object, updating the state 
    this.setState({[item]: value});
  }



  render()
  {
    return(<div className="App">
      <h1>CV App</h1>
      {/* Form area */}
      <General field="Name" onSub={this.onSubmit.bind(this)} editMode={this.state.editMode} toggleEdit={this.toggleEdit.bind(this)}/>
      <General field="Email" onSub={this.onSubmit.bind(this)} editMode={this.state.editMode} toggleEdit={this.toggleEdit.bind(this)}/>
      <General field="Phone" onSub={this.onSubmit.bind(this)} editMode={this.state.editMode} toggleEdit={this.toggleEdit.bind(this)}/>
      {/* Live CV preview */}
      <hr></hr>
      <h1>CV Preview:</h1><hr></hr>
      <h1 id="CV_name">Name: {this.state.name}</h1>
      <h1 id="email">Email: {this.state.email}</h1>
      <h1 id="CV_phone">Phone: {this.state.phone}</h1>
  </div>)
  }
}

export default App;
