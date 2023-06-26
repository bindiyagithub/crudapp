import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Button } from '@mui/material'



export default function AppointmentDisplay({data ,removeItem, editItem}) {
     console.log(data)

     const columns = [
      { field : 'id'},
      {
        field: "firstName",
        headerName: "FirstName",
        width: 120
      },

      {
        field: "lastName",
        headerName: "LastName",
        width: 120
      },

      {
         field : "fullName",
         headerName : "FullName",
         width : 170,

          valueGetter : (params)  =>{
              return params.row.firstName  + ' ' + params.row.lastName
          }
      },

      {
         field : "age",
         headerName : "age",
         width :120
      },

      {
          field : "address.city",
          headerName : "City",
          width : 120,

             valueGetter : (params)=>{
                   return params.row.address.city
             }

      },

      {
          field : "address.state",
          headerName : "State",
          width : 90,
              
              valueGetter : (params)=>{
                   return params.row.address.state
              }
      },

      {
            field : "delete",
            headerName : "Delete",
            width : 120,

              renderCell: (params) =>{
                console.log(params);
                return(<Button variant='contained' color='warning' 
                        onClick = {()=>
                {
                  removeItem(params.row.id);
                }}> Delete </Button>)
              }
      },

      {
            field : "edit",
            headerName : "Edit",
            width : 120,

            renderCell: (params)=>
            {
                     console.log(params);
                     return(<Button variant='contained' color='secondary'
                        onClick={ ()=>
                     {
                         editItem(params.row.id);
                     }}> Edit </Button>)
            }
      }


     ]
  return (
    <div style={{ height: 400, width: '90%'}} className='ms-5'>
       <DataGrid
           rows = {data}
           columns = {columns}
           pageSize = {5}
          rowsPerPageOptions ={[5]}
          checkboxSelection
        >   
       </DataGrid>
    </div>
  )
}
