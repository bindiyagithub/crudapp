
import { useFormik } from "formik";
import React from "react";
import {Dialog, DialogActions, DialogContent,DialogContentText,
  DialogTitle, TextField ,Button} from "@mui/material";

export default function EmployeeForm({data , id , setData , 
                                        setId , open ,close}) 
{

     let findData = [...data].find((value)=>
     {
           return value.id == id;
     })

  const formik = useFormik({
    initialValues: {
      firstName: id > 0 ? findData.firstName : "",  // it is for both edit fname & add fname
      lastName: id > 0 ? findData.lastName : "",
      age: id > 0 ? findData.age : "",
      address: {
        city: id > 0 ? findData.address.city : "",
        state: id > 0 ? findData.address.state : ""
      }
    },

    enableReinitialize: true,

    onSubmit: (values) => {    // it is for handleSubmit
      console.log(values);

        /* it is for add the value as well as update the value in form ,
        in if condition if props.id > 0 hoga to edit hoga else mai add hoga*/
            let t =[...data];

            if(id > 0)
            {
                t = t.map((v)=>
                {
                     if(v.id == id)
                     {
                             return({...values , id: id});
                     }
                     else
                     {
                          return v;
                     }
                })  
            }
            else
            {
              t.push({...values, id : t.length +1});
            }

             setData(t);
             setId(-1);
             formik.resetForm();   // for reset the data from form 
             close();

            
    },
  });
  return (
    <div>
      <Dialog open={open} close={close}>
        <DialogTitle> Registration Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your firstname , lastname
            & city , state here. We will send updates occasionally.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            name="firstName"
            value={formik.values.firstName}
            label="Firstname"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            name="lastName"
            value={formik.values.lastName}
            label="Lastname"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="age"
            name="age"
            value={formik.values.age}
            label="Age"
            type="number"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="address.city"
            label="City"
            type="text"
            name="address.city"
            value={formik.values.address.city}
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="address.state"
            name="address.state"
            value={formik.values.address.state}
            label="State"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
          />
        </DialogContent>
         
         <DialogActions>
          <Button onClick={formik.handleSubmit}>Save</Button>
          <Button onClick = {close}>Cancel</Button>
         </DialogActions>
      </Dialog>
    </div>
  );
}
