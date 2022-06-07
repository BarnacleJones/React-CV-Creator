import React from 'react';

class General extends React.Component{

    constructor() {
        super();
    
        this.state = {            
            editMode: true     
          } 
      }

      toggleEdit()
      {
        if (this.state.editMode) {                
          this.setState({editMode: false})
        }
        else{
          this.setState({editMode: true}
            )}
      }

    render(props)
    {        
       

        if (this.state.editMode) {
                return(<div>
                    <form onSubmit={this.props.onSub}>
                    <label>{this.props.field}</label>
                    <input type='text'></input>
                    <button type='submit'>Submit</button>
                    </form>                
                </div>
            )}
            else{
                return(
                    
                    <div>
                    <label>{this.props.field}: {this.props.name}</label>
                    <button onClick={this.toggleEdit}>Edit</button>                    
                    </div>
                )
            }      
    }
}

export default General;