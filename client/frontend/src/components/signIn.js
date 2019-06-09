import React from 'react'
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'; 
import {connect} from 'react-redux';
import SignInForm from './signINFORM';
import {signIn } from '../actions';



class SignIn extends React.Component  {
    onSubmit =(formValues )=>{
        this.props.signIn({formValues})
    }
    renderPath=(id)=>{
        if(id){
            return '/profile'
        }else{
            return '/signin'
        }
    }
    componentDidMount(){

    }
    render(){
        
        return (
            <div className="ui one column doubling stackable grid container wrappersign">
            <div className="column ">
        <SignInForm  onSubmit ={this.onSubmit} renderPath={this.renderPath}/>
        <a className="">New to us, <Link to='/signup' onClick={this.timedRefresh}>Sign Up</Link></a>
                  </div>
                  <div className="column">
                  <div className="ui segment content2">
                  <h1 class="ui center aligned icon header">
  <i class="cart arrow down icon"></i>
 Shop Smart,
 “Whoever said that money can't buy happiness simply didn't know where to go shopping.”
</h1>
                  </div>
                  </div>
            </div>
       )
    }
    
}
export default connect(null,{signIn})(SignIn )
