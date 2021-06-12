import { makeStyles} from '@material-ui/core';
import PlansFrom from '../../component/Plans/PlansFrom'
import React, { useState } from 'react'
import PlansList from '../../component/Plans/PlansList';

const ToDo = () => {

    const [toDo,setToDo] = useState([])

    const useStyles = makeStyles({
    main: {
        background: '#e2a8e7',
        color: '#fff',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        margin: 'auto',
        width: '30rem',
        padding: '30px 0',
        boxShadow: '0 0 25px 5px rgba(0, 0, 0, 0.07)',
        borderRadius: '20px',
    },
})
    const classes = useStyles();

    const addPlanHandler = (item) =>{
        setToDo((prevState)=>{
            return[
                ...prevState,{
                    ...item
                }
            ]
        })
    }

    return (
        <div className={classes.main}>
            <h2>To Do List</h2>
            <PlansFrom onAdd={addPlanHandler} />
            <PlansList plans={toDo} />
        </div>
    )
}

export default ToDo
