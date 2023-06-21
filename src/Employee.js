import { Button } from '@mui/material'
import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeDisplay from './EmployeeDisplay'


export default function Employee() {
     const [open , setOpen] = useState(false)

     //  open dialogbox by onclick Add Appointment Butoon
     const handleClickOpen = ()=>{
            setOpen(true);
     }

     // for close the dialog box 
     const handleClose = ()=>{
          setOpen(false);
     }

     const [data , setData] =  useState([]);   // for add(save) teh data
     const [id , setId] = useState(-1);        // for edit the data
      

     // for delete functionality
     const removeItem = (id)=>
     {
            let d = [...data].filter((value)=>
            {
                   return value.id !== id;
            })

            setData(d);
     }

     // for edit functionality

       const editItem =(id)=>
       {
              setOpen(true);   // for open the popup for update the data
              setId(id);
       }

  return (
    <div >
     <Button variant='outlined' onClick={handleClickOpen} className='m-3'>
         Add Employee
     </Button>

     <EmployeeForm open = {open} close = {handleClose}
                        data = {data} setData = {setData} 
                        id={id} setId = {setId} />
     
     <EmployeeDisplay data = {data} removeItem = {removeItem}
                         editItem = {editItem} />
    </div>
  )
}
