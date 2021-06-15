import React from 'react'
import { Link } from 'react-router-dom'
import './Navitem.css'

const Navitem = () =>{
    return(
        <ul className="navitem">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/table">Table</Link> </li>
            <li><Link to="/list">To Do</Link> </li>
            <li><Link to="/ToDolist">To Do List</Link> </li>
        </ul>
    )
}

export default Navitem