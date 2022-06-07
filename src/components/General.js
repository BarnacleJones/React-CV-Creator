import React from 'react';

class General extends React.Component{

    render()
    {               
        if (this.props.editMode) {            
            return(
                <div>
                    <form onSubmit={this.props.onSub}>
                    <label>{this.props.field}</label>
                    <input type='text'></input>
                    <button type='submit'>Submit</button>
                    </form>                
                </div>
            )
            }
            else{                
                return(
                    
                    <div>
                    <form onSubmit={this.props.onSub}>
                    <label>{this.props.field}: {this.props.name}</label>
                    <button type='submit'>Edit</button> 
                    </form>                   
                    </div>
                )
            }                
    }
     
}

export default General;