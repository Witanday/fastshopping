import React from 'react'
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';



class SignUpForm extends React.Component  {

    
    renderInput= ({ input, label,iconName,placeholder  })=>{
        
            return (
                <div className="field ">
                    <label className="Top Block Header">{label}</label>
                    <div class="ui left icon input">
                        <input {...input} type="text" autoComplete='off' placeholder={placeholder} autoComplete="off" className="ui segment "/>
                     <i class={iconName}></i>
                    </div>
                </div>
            )
    }

    onSubmit =(formValues )=>{
        this.props.onSubmit(formValues)
         }

    render(){
     


        return (
                  <form className="ui form " onSubmit={this.props.handleSubmit(this.onSubmit)} >
                  <h2 class="ui  header">
                     Sign Up to My FastShopping
                        <div class="sub header">Please fill this form to create an account!</div>
                    </h2>
                    <div className="rowUsername">
                    <div className="">
                    <Field  name ='firstname' component ={this.renderInput} label="First Name" iconName="user icon" placeholder="Enter your First Name"/>
                    </div>
                    <div className="right floated six wide column">
                    <Field  name ='lastname' component ={this.renderInput} label="Last Name" iconName="user icon" placeholder="Enter your Last Name"/>
                    </div>
                    
                 
                    </div>
                 
                  <Field name ='email' component ={this.renderInput} label="Email" iconName="at icon" placeholder="Enter your Email"/>
                  <Field  name ='password' component ={this.renderInput} label="Password" iconName="lock icon" placeholder="Enter your Password"/>
                  <Field   name ='confirmpassWord'component ={this.renderInput} label="Confirm Password" iconName="lock icon" placeholder="Confirm Password"/>
                  
                  <button type='submit'  class="ui button primary" tabindex="0" >Sign Up</button>
                  <p className="">Already have an account ?,<Link to='/signin'>Login here</Link></p>
                  </form> 
                  
            )
    }
   

    
}
export default reduxForm({
    form : 'signupform'
})(SignUpForm);



