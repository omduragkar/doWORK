import React, { Component } from 'react'
import './login.css'
import {Link} from "react-router-dom"
export default class Signup extends Component 
{
    render(){
        return(
            <div>
                <div class="col-sm-2 mx-auto me-auto" style={{display:'flex', justifyItems:'center'}}>
                    <Link className='mx-2 btn btn-outline-light disabled' style={{backgroundColor:"#495057"}} to="/auth/signup">Signup</Link>
                    <Link className='btn btn-outline-light text-dark' to="/auth/signin">signin</Link>
                </div>
                <div className='row my-5 container-fluid log'>
                    
                    <form className='col-md-4 mx-auto me-auto my-auto mb-auto'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                        Must be 8-20 characters long.
                                    </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                        Must be 8-20 characters long.
                                    </span>
                            </div>
                        </div>
                        <div class="row">
                            <button type="submit" class="col-md-6 w-25 btn btn-lg btn-outline-primary">Signup</button>
                            <a href="/" class="col-md-6 w-50">Forgot Password</a>
                        </div>
                    </form>
                    <div className='col-md-4 mx-auto me-auto my-auto mb-auto'>
                        <img src="/Images/Login.svg" class="image" height={'150%'} width={'120%'} alt="login"/>
                    </div>
                </div>
            </div>
       )
    }
}
