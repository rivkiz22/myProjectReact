// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { observer } from "mobx-react"
// import Dialog from '@mui/material/Dialog';
// import { DialogContent, DialogTitle, Input, Button } from '@mui/material';
// import swal from 'sweetalert';

// import { CheckLogin } from '../../data/Server/Login';

// const Login = (observer(() => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [server, setServer] = useState(2);
//   useEffect(() => {
//     const s = Promise.resolve(server);
//     s.then((value) => {
//       { value === 1 ? error() : value === 0 ? good() : "" }
//     });
//   }, [server])

//   function error() {
// setName('')
// setPassword('')
//     swal("Error!", "Email or password are not correct", "error", {
//       button: false,
//       timer: 2000,
//     });
//   }
//   const good = () => {
//     swal("", "manager", "success", {
//       buttons: false,
//       timer: 2000,
//     });
//   }
// const emptyInput=()=>{

// }
//   return (
//     <>
//       <Dialog open={true}>
//         <DialogTitle> Login</DialogTitle>
//         <DialogContent><Input type='text' placeholder='name*'value={name} onChange={(event) => setName(event.target.value)}></Input>
//           <br />
//           <Input type='password' placeholder='password*'id="password"value={password} onChange={(event) => setPassword(event.target.value)}></Input>

//           <Button onClick={() => {
//             setServer(CheckLogin(name, password));
//             emptyInput()
//           }}>to login</Button></DialogContent>
//       </Dialog>


//     </>
//   )
// }))
// export default Login

import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { observer } from "mobx-react"
import { CheckLogin } from '../../data/Server/Login';


const Login = (observer(() => {
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState("");
  const [server, setServer] = useState(2);
    useEffect(() => {
    const s = Promise.resolve(server);
    s.then((value) => {
      { value === 1 ? error() : value === 0 ? good() : "" }
    });
  }, [server])

  function error() {
 setName('')
 setPassword1('')
    swal("", "שם או קוד שגויים", "error", {
      button: false,
      timer: 2000,
    });
  }
  const good = () => {
    swal("", "זוהית כמנהל", "success", {
      buttons: false,
      timer: 2000,
    });
  }
  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4, 
          py: 3, 
          px: 2,  
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
    
        <FormControl>
          <FormLabel>שם</FormLabel>
          <Input
          
            name="name"
            type="name"
            value={name}
           onChange={(event) => setName(event.target.value)}
         />
        </FormControl>
        <FormControl>
          <FormLabel>קוד</FormLabel>
          <Input
           
            type="password"
            value={password1}
            onChange={(event) => setPassword1(event.target.value)}    />
        </FormControl>
        <Button onClick={() => {
            setServer(CheckLogin(name, password1));
          }}>to login</Button>
      </Sheet>
    </main>
  );

}))

export default Login