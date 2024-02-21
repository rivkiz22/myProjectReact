
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import { addService } from '../../data/Server/servise';

export default function AddService() {


    const [servise, setServise] = useState({
        name: "",
        id: "",
        description: "",
        price: "",
        duration: "",
      })
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = () => {
        addService(servise)
        handleClose()
        setServise({
            name: "",
            id: "",
            description: "",
            price: "",
            duration: "",
          })
    }
    return (
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
       להוספת שירות
        </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>הוספת שירות חדש</DialogTitle>
                <DialogContent>
                    <br />
                    <TextField label="שם" variant="outlined" value={servise.name} onChange={(e) =>setServise({ ...servise, name:e.target.value }) } />
                    <br />  <br />
                    <TextField label="קוד" variant="outlined" value={servise.id} onChange={(e) => setServise({ ...servise, id:e.target.value })} />
                    <br />  <br />
                    <TextField label="תיאור" variant="outlined" value={servise.description} onChange={(e) => setServise({ ...servise, description:e.target.value })} />
                    <br />  <br />
                    <TextField label="מחיר" variant="outlined" value={servise.price} onChange={(e) => setServise({ ...servise, price:e.target.value })} />
                    <br />  <br />
                    <TextField label="למשך" variant="outlined" value={servise.duration} onChange={(e) => setServise({ ...servise, duration:e.target.value })} />
                    <br />  <br />

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onSubmit()}>הוסף</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}