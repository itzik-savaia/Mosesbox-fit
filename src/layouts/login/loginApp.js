import React from 'react'
import './login.scss';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, } from 'react-redux';




const LoginApp = () => {
    var dispatch = useDispatch();


    const onChange_UserName = (e) => {
        e.preventDefault()
        dispatch({ type: 'USERNAME', payload: e.target.value })
    }
    const onChange_Password = (e) => {
        e.preventDefault()
        dispatch({ type: 'PASSWORD', payload: e.target.value })
    }

    const LogninSubmit = (event) => {
        console.log(event);
    }

    return (
        <div>
            <div className="icon"></div>

            <form onSubmit={LogninSubmit} className="send">
                <div className="M_textfield">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="שם משתמש"
                        type="username"
                        id="username"
                        autoComplete="username"
                        onChange={onChange_UserName}
                    />
                </div>
                <div className="M_textfield">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="סיסמה"
                        type="password"
                        id="password"
                        autoComplete="password"
                        onChange={onChange_Password}
                    />
                </div>
                <div className="M_buttom">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained">
                        כניסה
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default LoginApp;