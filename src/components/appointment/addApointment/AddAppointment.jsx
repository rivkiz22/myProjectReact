import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { observer } from 'mobx-react';
import { useState } from 'react';

import { addAppointment } from '../../../data/Server/appointment';
import { error, onSubmit } from './validDetailes';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AddAppointment = (observer(() => {
  const [open, setOpen] = React.useState(false);
  const [appointment, setAppointment] = useState({
    serviceDescription: "",
    servicePrice: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    dateTime: (dayjs(new Date()))
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const send = () => {
    let detailes = onSubmit(appointment)
    if (detailes) {
      {console.log(appointment.dateTime)}

      let uns = addAppointment(appointment)
      const s = Promise.resolve(uns);
      s.then((good) => {
        if (good) {
          swal("", "הפגישה נקבעה בהצלחה", "success", {
            buttons: false,
            timer: 2000,
          });
          handleClose()
          setAppointment({
            serviceDescription: "",
            servicePrice: "",
            clientName: "",
            clientPhone: "",
            clientEmail: "",
            dateTime:dayjs(new Date())
          })
        }
        else
          error("The date is taken chose another date")
      });
    }
  }
  return (
    <>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          לקביעת פגישה
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Button autoFocus color="inherit" onClick={send}>
                שמור
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItemButton>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                  <DateTimePicker 
                    value={appointment.dateTime}
                    onChange={(newValue) => setAppointment({ ...appointment, dateTime: newValue})}
                   
                  />
               
                </DemoContainer>
              </LocalizationProvider>
            </ListItemButton>
            <ListItemButton>
              <TextField required label="שם" type="text" fullWidth
                value={appointment.clientName} onChange={(e) => setAppointment({ ...appointment, clientName: e.target.value })}
              />
            </ListItemButton>
            <ListItemButton>
              <TextField required label="טלפון" type="number" fullWidth
                value={appointment.clientPhone} onChange={(e) => setAppointment({ ...appointment, clientPhone: e.target.value })}
              />
            </ListItemButton>
            <ListItemButton>
              <TextField required label="מייל:" type="email" fullWidth
                value={appointment.clientEmail} onChange={(e) => setAppointment({ ...appointment, clientEmail: e.target.value })}
              />
            </ListItemButton>
            <ListItemButton>
              <TextField required label="תיאור השירות" type="text" fullWidth
                value={appointment.serviceDescription} onChange={(e) => setAppointment({ ...appointment, serviceDescription: e.target.value })}
              />
            </ListItemButton>
            <ListItemButton>
              <TextField required label="מחיר השירות" type="number" fullWidth
                value={appointment.servicePrice} onChange={(e) => setAppointment({ ...appointment, servicePrice: e.target.value })}
              />
            </ListItemButton>
          </List>
        </Dialog>
      </React.Fragment>
    </>
  )
}))
export default AddAppointment