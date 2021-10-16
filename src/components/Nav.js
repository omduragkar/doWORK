import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <nav style={{display:'flex', justifyItems:'center', justifyContent:'space-between'}} className="container mx-auto py-4">
                <Link to="/" className='navbar-brand' style={{fontWeight:'900'}}><b>doWORK</b></Link>
                
                <ul style={{display:'flex', justifyItems:'center', listStyle:'none'}}>
                    <li style={{borderRadius:10}}><Link to="/" className='px-2 me-2 btn btn-outline-light text-primary' style={{ fontWeight:"500"}}>Home</Link></li>
                    <li style={{borderRadius:10}} ><Link to="/auth/signin" className='px-2 me-2 btn btn-outline-light text-primary' style={{ fontWeight:"500"}}>Post a WORK</Link></li>
                    <li style={{borderRadius:10}} ><Link to="/auth/signin" className='px-2 me-2 btn btn-outline-light text-primary' style={{ fontWeight:"500"}}>Get a WORK</Link></li>
                    <li style={{borderRadius:10}} ><Link to="/work" className='px-2 me-2 btn btn-outline-light text-primary' style={{ fontWeight:"500"}}>Work List</Link></li>
                    <li id="sm" style={{borderRadius:10}}><Link to="/" className='px-2 me-2 btn btn-outline-light text-primary' style={{ fontWeight:"500"}}>Home</Link></li>
                </ul>
            </nav>
        )
    }
}

