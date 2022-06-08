import './App.css';
import React from 'react';
import General from './components/General';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {

  constructor() {
    //inherits all properties of react.component?
    super();
    //set properties of state
    this.state = {
        name: ['Barnacle Jones', true],
        email: ['benmjones@protonmail.com', true],
        phone: ['+641111111111', true],
        linkedin: ['https://www.linkedin.com/', true],
        github: ['https://github.com/BarnacleJones', true], 
        // education array [0=school 1=editmode, 2=qual, 3=date] 
        education: ['Toi Ohomai Institute of Technology', true, 'NZ Diploma in Software Development (Level 6)', '07/07/2023']  ,
        //work experience array [0=company 1=editMode 2=position 3=description 4=dates]
        work: ['Harvard University', true, 'Professor of Artificial Intelligence', 'Helping out and generally being a good employee on my best behaviour.', '07/07/2023']
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

  //Submit function for education section
  educationSubmit(e)
  {
    e.preventDefault(); 
    console.log(e.target)  
    let school = e.target.children[1].value;
    let qual = e.target.children[3].value;
    let date = e.target.children[5].value;
    //toggle between edit/form
    if(this.state.education[1])
    {
      this.setState({education: [school, false, qual, date]})
    }
    else{this.setState({education: [school, true, qual, date]})}    
  }

  //submitting work exp function
  workSubmit(e)
  {
    e.preventDefault(); 
    console.log(e.target)  
    let company = e.target.children[1].value;
    let position = e.target.children[3].value;
    let description = e.target.children[5].value;
    let dates = e.target.children[7].value;
    if(this.state.work[1])
    {
      this.setState({work: [company, false, position,description, dates]})
    }
    else{this.setState({work: [company, true, position,description, dates]})}    
  }

  //further improvements...how to add additional education and work???
  addMoreEducation()
  {
    //how.......
  }

  render()
  {return(
  <div className="App">      
      <div className='input_section'>
        <h1>CV Builder</h1>
        {/* Form area */}  
        <hr></hr>   
        <h2>General information:</h2>         
        <General field="Name" onSub={this.onSubmit.bind(this)} 
        editMode={this.state.name[1]} name={this.state.name[0]} />
        <General field="Email" onSub={this.onSubmit.bind(this)} 
        editMode={this.state.email[1]} name={this.state.email[0]}/>
        <General field="Phone" onSub={this.onSubmit.bind(this)} 
        editMode={this.state.phone[1]} name={this.state.phone[0]}/>
        <General field="LinkedIn" onSub={this.onSubmit.bind(this)} 
        editMode={this.state.linkedin[1]} name={this.state.linkedin[0]}/>
        <General field="Github" onSub={this.onSubmit.bind(this)} 
        editMode={this.state.github[1]} name={this.state.github[0]}/>
        <hr></hr>
        <h2>Education:</h2>
        <Education field1="School" 
                  field2="Title/Qualification" 
                  field3="Date" 
                  onSub={this.educationSubmit.bind(this)} 
                  editMode={this.state.education[1]} 
                  school={this.state.education[0]}
                  qual={this.state.education[2]}
                  date={this.state.education[3]}
                  addMore={this.addMoreEducation.bind(this)}
        />
        <hr></hr>
        <br></br>
        <h2>Work experience:</h2>
        <WorkExperience 
        field1="Company" 
        field2="Position" 
        field3="Description" 
        onSub={this.workSubmit.bind(this)} 
        editMode={this.state.work[1]} 
        company={this.state.work[0]}
        position={this.state.work[2]}
        description={this.state.work[3]}
        date={this.state.work[4]}
        addMore={this.addMoreEducation.bind(this)}/>    
      </div>
      
      <div className="cv_section"> 
      {/* Live CV preview */}       
        <div className='general_section'>
          <div  className='general_name'>
          <h2><em>{this.state.name}</em></h2>
          <hr className='name_hr'></hr>
          </div>
          <p><i className="fa-solid fa-envelope"></i> {this.state.email}</p>
          <p><i className="fa-solid fa-phone"></i> {this.state.phone}</p>
          <p><i className="fa-brands fa-linkedin"></i> {this.state.linkedin}</p>
          <p><i className="fa-brands fa-github"></i> {this.state.github}</p>          
        </div>
        
        <div className="education_section_header">
          <h2>Education</h2>
            <div className='education_section_content'>
              <p>Education Provider: {this.state.education[0]}</p>
              <p>Qualification: {this.state.education[2]}</p>
              <p>Date: {this.state.education[3]}</p>
            </div>
        </div>
        <div className='work_section_header'>
          <h2>Work experience</h2>
            <div className='work_section_content'>
            <h4>Company: {this.state.work[0]}</h4>
            <p>Position: {this.state.work[2]}</p>
            <p>{this.state.work[3]}</p>
            <p>{this.state.work[4]}</p>
            </div>
        </div>
      </div>
      <br></br><br></br>
    </div>)
  }
}

export default App;