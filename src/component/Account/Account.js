import React from 'react'
import { Button , makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    account: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        margin: 'auto',
        width: '50rem',
        padding: '30px 0',
        boxShadow: '0 0 25px 5px rgba(0, 0, 0, 0.07)',
        borderRadius: '5px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'borderBox',
        margin: '10px',
    },
    textField: {
        width: '25ch',
        margin: '10px auto',
    },
    button: {
        width: '10px',
        margin: '5px auto',
    },
}));

const Account =() => {

    const classes = useStyles();
        return(
            <div className={classes.account}>
                <h2>Account</h2>
                <form className={classes.form}>
                    <TextField
                        className={classes.textField}
                        id="outlined-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textField}
                        id="outlined-number"
                        label="Email"
                        type="email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textField}
                        id="outlined-number"
                        label="Password"
                        type="password"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <Button className={classes.button} variant="contained" >Submit</Button>
                </form>
            </div>
        )
}

export default Account