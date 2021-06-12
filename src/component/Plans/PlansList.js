import { Button, List } from '@material-ui/core'
import React, { useState } from 'react'
import './list.css'
const PlansList = (props) => {
    const [click,setClick]=useState(false)

    const clickHandler = () =>{
        setClick({click: true})
    }
    return (
        <div style={{display: 'flex'}} className="plan-list">
            <ul>
                {props.plans.map((item) => (
                    <li style={{background : click ? 'green' : 'null'}}>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <Button type='button'> <i className="fa fa-trash"></i> </Button>
            <Button type='button' onClick={clickHandler}> done </Button>
        </div>
    )
}

export default PlansList
