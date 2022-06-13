import './App.css';
import React, { useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

// class App extends React.Component {

//   constructor() {
//     //inherits all properties of react.component?
//     super();
//     //set properties of state

  const App = () => {

    const [name, setName] = useState(['Barnacle Jones', true]);
    const [email, setEmail] = useState(['benmjones@protonmail.com', true]);
    const [phone, setPhone] = useState(['+641111111111', true]);
    const [linkedin, setLinkedin] = useState(['https://www.linkedin.com/', true])
    const [github, setGithub] = useState('https://github.com/BarnacleJones');
    const [education, setEducation] = useState(['Toi Ohomai Institute of Technology', true, 'NZ Diploma in Software Development (Level 6)', '07/07/2023'])
    const [work, setWork] = useState(['Harvard University', true, 'Professor of Artificial Intelligence', 'Helping out and generally being a good employee on my best behaviour.', '07/07/2023'])

  function onSubmit(e){
    e.preventDefault();
    let value = e.target.children[1].value;
    var item = e.target.children[0].firstChild.nodeValue.toLowerCase();
    if (item === "name" && name[1]) {
      setName([value, false])
    }
    else if (item === "name" && !name[1])
    {
      setName([value, true])
    }

    else if(item === "email" && email[1])
    {
      setEmail([value, false])
    }
    else if (item === "email" && !email[1])
    {
      setEmail([value, true])
    }

    else if(item === "phone" && phone[1])
    {
      setPhone([value, false])
    }
    else if (item === "phone" && !phone[1])
    {
      setPhone([value, true])
    }

    else if(item === "github" && github[1])
    {
      setGithub([value, false])
    }
    else if (item === "github" && !github[1])
    {
      setGithub([value, true])
    }

    // else if(item === "education" && education[1])
    // {
    //   setEducation([value, false])
    // }
    // else if (item === "education" && !education[1])
    // {
    //   setEducation([value, true])
    // }

    // else if(item === "work" && work[1])
    // {
    //   setWork([value, false])
    // }
    // else if (item === "work" && !work[1])
    // {
    //   setWork([value, true])
    // }

    else if(item === "linkedin" && linkedin[1])
    {
      setLinkedin([value, false])
    }
    else if (item === "linkedin" && !linkedin[1])
    {
      setLinkedin([value, true])
    }
    
  }

  //Submit function for education section
  function educationSubmit(e)
  {
    e.preventDefault(); 
    let school = e.target.children[1].value;
    let qual = e.target.children[3].value;
    let date = e.target.children[5].value;
    // setEducation([school, false, qual, date])
    // //toggle between edit/form
    if(education[1])
    {
      setEducation([school, false, qual, date])
    }
    else{setEducation([school, true, qual, date])}    
  }

  //submitting work exp function
  function workSubmit(e)
  {
    e.preventDefault(); 
    // console.log(e.target)  
    let company = e.target.children[1].value;
    let position = e.target.children[3].value;
    let description = e.target.children[5].value;
    let dates = e.target.children[7].value;
    
    // console.log()
    if(work[1])
    {
      setWork([company, false, position,description, dates])
    }
    else{setWork([company, true, position,description, dates])}    
  }

  //further improvements...how to add additional education and work???
 

 return(
  <div className="App">      
      <div className='input_section'>
        <h1>CV Builder</h1>
        {/* Form area */}  
        <hr></hr>   
        <h2>General information:</h2>         
        <General field="Name" onSub={onSubmit.bind(this)} editMode={name[1]}
         />
        <General field="Email" onSub={onSubmit.bind(this)} editMode={email[1]}
        />
        <General field="Phone" onSub={onSubmit.bind(this)} editMode={phone[1]}
        />
        <General field="LinkedIn" onSub={onSubmit.bind(this)} editMode={linkedin[1]}
        />
        <General field="Github" onSub={onSubmit.bind(this)} editMode={github[1]}
        />
        <hr></hr>
        <h2>Education:</h2>
        <Education field1="School" 
                  field2="Title/Qualification" 
                  field3="Date" 
                  onSub={educationSubmit.bind(this)} 
                  editMode={education[1]}
                  
        />
        <hr></hr>
        <br></br>
        <h2>Work experience:</h2>
        <WorkExperience 
        field1="Company" 
        field2="Position" 
        field3="Description" 
        onSub={workSubmit.bind(this)} 
        editMode={work[1]} 
        company={work[0]}
        position={work[2]}
        description={work[3]}
        date={work[4]}
        // addMore={this.addMoreEducation.bind(this)}
        />    
      </div>
      
      <div className="cv_section"> 
      {/* Live CV preview */}       
        <div className='general_section'>
          <div  className='general_name'>
          <h2><em>{name}</em></h2>
          <hr className='name_hr'></hr>
          </div>
          <p><i className="fa-solid fa-envelope"></i> {email}</p>
          <p><i className="fa-solid fa-phone"></i> {phone}</p>
          <p><i className="fa-brands fa-linkedin"></i> {linkedin}</p>
          <p><i className="fa-brands fa-github"></i> {github}</p>          
        </div>
        
        <div className="education_section_header">
          <h2>Education</h2>
            <div className='education_section_content'>
              <p>Education Provider: {education[0]}</p>
              <p>Qualification: {education[2]}</p>
              <p>Date: {education[3]}</p>
            </div>
        </div>
        <div className='work_section_header'>
          <h2>Work experience</h2>
            <div className='work_section_content'>
            <h4>Company: {work[0]}</h4>
            <p>Position: {work[2]}</p>
            <p>{work[3]}</p>
            <p>{work[4]}</p>
            </div>
        </div>
      </div>
      <br></br><br></br>
    </div>)
  }


export default App;