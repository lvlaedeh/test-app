import { Button, makeStyles, TextField } from '@material-ui/core'
import React , {useState} from 'react'

const PlansFrom = (props) => {
    const [title,setTitle] = useState('')
    const useStyles = makeStyles({
        main : {
            display : 'flex',
            margin : '20px 0' ,
        },
        // textField : {
        //     margin
        // }
    })

    const submitHandler = (event) =>{
        event.preventDefault()
        props.onAdd({title : title})
    }
    const classes = useStyles()
    return (
        <div className={classes.main}>
           <form onSubmit={submitHandler}>
                <TextField
                    id="input_add"
                    type="text"
                    value={title}
                    onChange={(event)=> setTitle(event.target.value)}
                />
                <Button type="submit" >Add</Button>
            </form> 
        </div>
    )
}

export default PlansFrom
