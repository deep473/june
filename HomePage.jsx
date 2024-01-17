import React from 'react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div>
        <Link to="/login">LOGIN</Link>
        <br></br>
        <Link to="/registration">REGISTER</Link> 
    </div>
  )
}
