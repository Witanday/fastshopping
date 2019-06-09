import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class LocalAuth extends Component {
   
    renderAuthButtom(isSignedIn){
        if(isSignedIn===null){
            return (
                <div>
                    <Link  to ='/signup' className="ui red google button"  onClick={this.onSignOutClick}><i className="google icon" />Sign Up</Link>
                    <Link to ='/signin' className="ui red google button"  onClick={this.onSignInClick}><i className="google icon"/>Sign In</Link>
                </div>
            )
        }else if (isSignedIn){
            return( <Link to ='/home' className="ui red google button"  onClick={this.onSignInClick}><i className="google icon"/>Sign Out</Link>)
        }
    }
    render() {
        const isSignedIn=null
        return (
            <div>
                {this.renderAuthButtom(isSignedIn)}
            </div>
        )
    }
}
