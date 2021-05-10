import React, { useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles({
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
});

const Account = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(name, email, password)
    }

    const classes = useStyles();
    return (
        <div className={classes.account} >
            <h2>Account</h2>
            <form className={classes.form} onSubmit={submitHandler}>
                <TextField
                    className={classes.textField}
                    id="outlined-name"
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setname(event.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    id="outlined-email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setemail(event.target.value)}
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
                    value={password}
                    onChange={(event) => setpassword(event.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Button className={classes.button} variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Account