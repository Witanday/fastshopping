import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';




 class AddCATEGORYFORM extends Component {

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
    render() {
       // onSubmit={this.props.handleSubmit(this.onSubmit)}
        return (
            <form className="ui form  " >
                  <h3 class="ui  header">Add Category</h3>
                  <Field  name='text' component ={this.renderInput} label="Name :" iconName="clipboard outline icon" placeholder="Enter your Password"/>
                  <Link to='/home' type='submit' class="ui button" tabindex="0">Sign In</Link>
                 
                  </form> 
        )
    }
}


export default reduxForm({
    form :'addactegoryform'
})(AddCATEGORYFORM)