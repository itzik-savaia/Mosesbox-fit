import React from 'react';
import './home.scss'
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch, } from 'react-redux';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import * as emailjs from 'emailjs-com';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const HomeApp = (props) => {
    var dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { FullName, Phone, } = useSelector((state) => ({
        ...state.ContectReducer,
    }));

    const onChange_FullName = (e) => {
        e.preventDefault()
        dispatch({ type: 'FULL_NAME', payload: e.target.value })
    }
    const onChange_Phone = (e) => {
        e.preventDefault()
        dispatch({ type: 'PHONE', payload: e.target.value })
    }
    const ContectSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(`gmail`, `template_hoa03v8`, e.target, `user_LoGgSFuy0tH3qqeOV9pVp`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }



    return (
        <div>
            <div className="icon"></div>
            <div className="details">
                <b>MOSES BOX & TEAM SAKURA</b>
                <b>בשיתוף פעולה</b>
                <p>קבוצת איגרוף תאילנדי/ קיקבוקס</p>
                <a href="https://maps.google.com/?q=יהואש 10 קריית אונו" style={{ color: 'red' }}>
                    <b>יהואש 10 קריית אונו</b>
                </a>
                <br />
                <b>ימי שני וחמישי</b>
                <p>בוגרים 20:00-21:30 | נוער 19:00-20:00</p>
                <div className="mail">
                    <p>האקדמיה רוני וינפרד שילוב אומניות לחימה</p>
                    <h6> <InstagramIcon /> mosesbox.fit <FacebookIcon /></h6>
                </div>
                <h4>:לפרטים והרשמה</h4>
                <div className="telephones">
                    <b>
                        <a href="tel:0542847990">054-284-7990 משה</a>
                        <br />
                        <a href="tel:0522801794">052-280-1794 רוני</a>
                    </b>
                </div>
            </div>

            <form onSubmit={ContectSubmit} className="send">
                <div className="M_textfield">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="fullname"
                        label="שם מלא"
                        type="fullname"
                        id="fullname"
                        autoComplete="fullname"
                        onChange={onChange_FullName}
                    />
                </div>
                <div className="M_textfield">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phone"
                        label="טלפון"
                        type="tel"
                        id="phone"
                        autoComplete="phone"
                        onChange={onChange_Phone}
                    />
                </div>
                <div className="M_buttom">
                    <Button
                        onClick={handleClickOpen}
                        type="submit"
                        fullWidth
                        variant="contained">
                        שלח פרטים
                    </Button>
                </div>
            </form>
            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">
                    <DialogTitle id="alert-dialog-slide-title">{`${FullName}, הפרטים שלך נשלחו`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            תודה רבה נחזור אליך בהקדם האפשרי
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">סגור</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
export default HomeApp;
