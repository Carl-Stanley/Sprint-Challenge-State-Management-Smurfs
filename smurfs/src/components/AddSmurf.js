import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSmurfs } from '../actions';

class AddSmurf extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
          };
        };
        
    onSubmit = e => {
         e.preventDefault();
          if (this.state.age.trim() && this.state.name.trim() && this.state.height.trim()) {
          this.props.AddtheSmurf(this.state);
        
        }
    };     
    
    onDelete = e => {
      e.preventDefault();
       if (this.state.age.trim() && this.state.name.trim() && this.state.height.trim()) {

      
        //this.props.removetheSmurf(this.state);
     
     }
    };     
 
   
    
    onInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    
    render() {
      return (
        
        <div>
            
            <form onSubmit={ this.onSubmit } className="main-smurf-form">
            
            <div className="Smurf-form">
                
                <input
                type="text"
                placeholder="Name:"
                className="smurf-input"
                name="name"
                onChange={ this.onInputChange }
                value={ this.state.name }/>

            </div>
            
            <div className="Smurf-form">
              
              <input
                type="text"
                placeholder="Age:"
                className="smurf-input"
                name="age"
                onChange={ this.onInputChange }
                value={ this.state.age }>              
              </input>

            </div>
            
            <div className="Smurf-form">
              
              <input
                type="text"
                placeholder="Height:"
                className="smurf-input"
                name="height"
                onChange={ this.onInputChange }
                value={ this.state.height }>
              </input>

            </div>
            
            <div className="Smurf-form">
              
              <button type="submit" className="submit-btn" >ADD SMURF</button>
              
            </div>
            
            <div className="Smurf-form">
              
              <button type="submit" className="delete-btn" onClick={this.onDelete}>DELETE SMURF</button>
              
            </div>

          </form>
        
        </div>
      );
    }
  };
  

const mapDispatchToProps = dispatch => {
    return {
      AddtheSmurf: post => {
        dispatch(sendSmurfs(post));
      }
    };
  };

export default connect(
    null,
    mapDispatchToProps
  )(AddSmurf);