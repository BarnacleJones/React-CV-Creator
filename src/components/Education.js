import React from 'react';

class Education extends React.Component{

    render()
    {               
        if (this.props.editMode) {            
            return(
                <div>
                    <form className='education_form' onSubmit={this.props.onSub}>
                    <label>{this.props.field1}</label>
                    <input type='text'></input>  
                    {/* <br></br>   <br></br>  */}
                    <label>{this.props.field2}</label>
                    <input type='text'></input> 
                    {/* <br></br>  <br></br>  */}
                    <label>{this.props.field3}</label>
                    <input type='date'></input> <br></br> <br></br>               
                    <button type='submit'><i class="fa-solid fa-plus"></i></button>                    
                    </form>  
                    {/* <button onClick={this.props.addMore}>Add More Education</button> */}
                    <br></br>              
                </div>
            )
            }
            else{                
                return(
                    
                    <div>
                    <form onSubmit={this.props.onSub}>
                    <label>{this.props.field1}:{this.props.school}</label>
                    <br></br>
                    <label>{this.props.field2}:{this.props.qual}</label>
                    <br></br>
                    <label>{this.props.field3}:{this.props.date}</label>
                    <br></br>
                    <button type='submit'><i class="fa-solid fa-pen-to-square"></i></button> 
                    </form>                   
                    </div>
                )
            }                
    }
     
}

export default Education;