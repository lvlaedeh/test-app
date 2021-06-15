import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

const ListItem = (props) => {

    const plansList = useSelector((state) => state.plansList)
    const {listDone} = plansList

    return (
            <li style={{ margin: '1rem 0',
                        padding: '1rem',
                        borderRadius: '5px',
                        background: listDone.find((e)=> e.title === props.item) ? 'green' : null}}>
                <span>{props.item}</span>
                {!listDone.find((e)=> e.title === props.item) ? <span>
                    <Button type='button' onClick={props.remove}> <i className="fa fa-trash"></i> </Button>
                    <Button type='button' onClick={props.done}> done </Button>
                </span> : null }
            </li>
         
    )
}

export default ListItem
