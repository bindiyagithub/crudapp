import React from 'react';
import Button from '@mui/material/Button';

export default function Employee_Inner(props) {

  
  return (
    <tr className='table-danger'>
     <td>{props.mydata?.fname}</td>
     <td>{props.mydata?.lname}</td>
     <td>{props.mydata?.city}</td>
     <td>{props.mydata?.state}</td>
    <td>
      <Button onClick={()=>props.del(props.index)} 
    variant="contained" color="warning" >
      Delete</Button></td>
    <td>
      <Button onClick={()=>props.edit(props.index)} 
    variant="contained" color="secondary">
      Edit</Button></td>
    </tr>
    
  )
}
