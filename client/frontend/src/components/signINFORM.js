import React from 'react'
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'; 
import jwt_decode from 'jwt-decode';



class SignInForm extends React.Component  {


    renderInput= ({ input, label,iconName,placeholder})=>{
            return (
                <div className="field ">
                    <label className="Top Block Header">{label}</label>
                    <div class="ui left icon input">
                        <input {...input} type="text" placeholder={placeholder} autoComplete="off" className="ui segment "/>
                     <i class={iconName}></i>
                    </div>
                </div>
            )
    }
       
  timedRefresh =(timeoutPeriod)=> {
        setTimeout("location.reload(true);",1);
    }
    onSubmit =(formValues )=>{
        this.props.onSubmit(formValues)
         }
    render(){
        const token= window.localStorage.getItem('access_token')
        var decoded = jwt_decode(token);
       const user_id=decoded.user_id
        console.log(user_id)
        return (
                  <form className="ui form  " onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <h3 class="ui  header">Sign in My FastShopping</h3>
                  <Field  name='email' component ={this.renderInput} label="Email" iconName="at icon" placeholder="Enter your Email"/>
                  <Field  name='password' component ={this.renderInput} label="Password" iconName="lock icon" placeholder="Enter your Password"/>
                  <Link to={this.props.renderPath(user_id)} type='submit' class="ui button" tabindex="0">Sign In</Link>
                 
                  </form> 
                  )
    }
   

    
}
export default reduxForm({
    form : 'signinform'
})(SignInForm);


