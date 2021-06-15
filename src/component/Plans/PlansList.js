import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './list.css'

const PlansList = (props) => {
    const [click,setClick]=useState([])

    const clickHandler = (id) =>{
        setClick((prevState)=>{
            return [
                ...prevState,
               id
            ]
        })
    }
    
    return (
        <div style={{display: 'flex'}} className="plan-list">
            <ul>
                {props.plans.map((item,index) => (
                    <li key={index.toString()} style={{background : click.find((e)=>e.title === item.title ) ? 'green' : 'null'}}>
                        <span>{item.title}</span>
                        { !click.find((e)=>e.title === item.title )  ?
                        <span>
                            <Button type='button' onClick={()=> props.deleteItem(item)}> <i className="fa fa-trash"></i> </Button>
                            <Button type='button' onClick={()=>clickHandler(item)}> done </Button>
                        </span> : null}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default PlansList
