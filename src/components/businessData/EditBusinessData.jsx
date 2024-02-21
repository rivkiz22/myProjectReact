import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

import { addBusiness } from '../../data/Server/business';
import "../css/business.css"
export default function EditBusinessData() {
    const [business, setBusiness] = useState({
        name: "",
        id: "",
        address: "",
        phone: "",
        logo: "",
        description:"",
        owner:""

      })
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = () => {
      addBusiness(business)
        handleClose()
    }
 

    return (
        <React.Fragment>
            <Fab color="primary" size="small" aria-label="edit" onClick={handleClickOpen}>
                <EditIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>ערוך פרטי עסק</DialogTitle>
                <DialogContent>
                    <br />  <TextField label="קוד עסק"className='b'  value={business.id} onChange={(e) => setBusiness({ ...business, id: e.target.value })} />
                    <br />  <br />
                    <TextField label="שם העסק"  value={business.name} onChange={(e) =>  setBusiness({ ...business, name: e.target.value })} />
                    <br />  <br />
                    
                    <TextField label="כתובת"  value={business.address} onChange={(e) =>  setBusiness({ ...business, address: e.target.value })} />
                    <br />  <br />
                    <TextField label="טלפון"  value={business.phone} onChange={(e) => setBusiness({ ...business, phone: e.target.value })} />
                    <br />  <br />
                    <TextField label="לוגו" value={business.logo} onChange={(e) =>  setBusiness({ ...business, logo: e.target.value })} />
                    <br />  <br />
                    <TextField label="תאור"  value={business.description} onChange={(e) =>  setBusiness({ ...business, description: e.target.value })} />
                    <br />  <br />
                    <TextField label="שם המטפלת"  value={business.owner} onChange={(e) =>  setBusiness({ ...business, owner: e.target.value })} />
                    <br />  <br />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onSubmit()}>שמור</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}