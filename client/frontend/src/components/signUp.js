import React from 'react'
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../actions'
import SignUpForm from './signUPFORM'

class SignUp extends React.Component  {

    onSubmit =(formValues )=>{

        this.props.register({formValues})
    }
    render(){
        return (
       
            <div className="ui one column doubling stackable grid container wrappersign">
<div className="column">
                  <div className="ui segment content2">
                  <h1 class="ui center aligned icon header">
  <i class="cart arrow down icon"></i>
 Shop Smart,
 “Whoever said that money can't buy happiness simply didn't know where to go shopping.”
</h1>
                  </div>
                  </div>
                 <div className="column ">
                     <SignUpForm  onSubmit={this.onSubmit}/>
                  </div>

            </div>)
    }
   

    
}


export default connect( null,{register})(SignUp)

