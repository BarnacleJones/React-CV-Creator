import React from 'react';

class General extends React.Component{

    render()
    {               
        if (this.props.editMode) {            
            return(
                <div>
                    <form onSubmit={this.props.onSub}>
                    <label>{this.props.field} </label>
                    <input type='text'></input>                    
                    <button type='submit'><i class="fa-solid fa-plus"></i></button>                    
                    </form>  
                    <br></br>              
                </div>
            )
            }
            else{                
                return(
                    
                    <div>
                    <form onSubmit={this.props.onSub}>
                    <label>{this.props.field}: {this.props.name}</label>
                    <button type='submit'><i class="fa-solid fa-pen-to-square"></i></button> 
                    </form>                   
                    </div>
                )
            }                
    }
     
}

export default General;