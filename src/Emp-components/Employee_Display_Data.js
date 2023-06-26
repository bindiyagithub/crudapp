import React from 'react';
import Employee_Inner from './Employee_Inner'


export default function Employee_Display_Data( props )
{
  const { list, remove, setedt } = props;

  /* ye component mai humko table format mai data display karvana hai
  so we call EmployeeInner name component  */
  return (
    <table className='table table-bordered table-stripped 
    table-hover w-75 m-2'>
      <tbody>
        
        {
          list?.map( ( value, index ) =>
          {
            return ( <Employee_Inner mydata={value} key={index}
              index={index} del={remove} edit={setedt}>
            </Employee_Inner> )
          } )

        }

      </tbody></table>
  )
}
