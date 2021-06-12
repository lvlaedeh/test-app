import { makeStyles } from '@material-ui/core';
import React from 'react'

const ToDo = () => {

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
    return (
        <div className={classes.main}>
            <h2>To Do List</h2>
        </div>
    )
}

export default ToDo
