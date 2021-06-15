import { Button , makeStyles, TextField} from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { doneAction, plansListAction, removeAction } from '../../action/plansAction'
import ListItem from '../../component/Plans/ListItem'

const ToDoList = () => {

    const useStyles = makeStyles({
    main: {
        background: '#96e7a1',
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
    form : {
            margin : '20px 0' ,
        },
    })
    const classes = useStyles();

    const [title,setTitle] = useState('')

    const plansList = useSelector((state) => state.plansList)
    const {plans} = plansList
    
    const dispatch = useDispatch()
    
    const submitHandler = (event) =>{
        event.preventDefault()
        setTitle('')
        plansListAction({title : title})(dispatch)
    }

    const removeItem = (id) => {
        removeAction(id)(dispatch)
    }
    
    const doneList = (id) => {
        doneAction(id)(dispatch)
    }
    
    return (
        <div className={classes.main}>
            <h2>To Do List</h2>
            <form className={classes.form} onSubmit={submitHandler}>
                <TextField
                    id='input-add'
                    type='text'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <Button type='submit'>Add</Button>
            </form>
            <ul>
                {plans.map((item,index) => (
                        <ListItem 
                        key ={index.toString()} 
                        item={item.title}
                        done={()=> doneList(item)}
                        remove={() => removeItem(item)}
                        />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
