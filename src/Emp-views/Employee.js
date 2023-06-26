import React , { useState} from 'react';
import Employee_Display_Data from '../Emp-components/Employee_Display_Data';
import Employee_TextFields from '../Emp-fields/Employee_TextFields'

export default function Employee() {
     const [data,setData] =  useState([]);  // yaha useState mai distructure kiya hai usme 1st blank array hoga

     const [edit,setedit] = useState(-1);   // yaha setedit mai only index set hoker ayegi.

     /* ye component mai textbox vala component means <EmployeeForm>
     & uski value table format mai display ki hai wo data (jo textbox mai
      dalenge wo value), wo wala component <EmployeeList_DisplayData> . 
      ye dono component
     ko call kiya hai so we perform delete operation here */

    const removeItem = (index)=> {

          let p = [...data];
          p.splice(index,1);
      
          setData(p);
      
    }

    /* here we call EmployeeForm component (it means only our textbox form)
     */
  return (
     <>
         <Employee_TextFields list={data} setlist={setData} edt = {edit}
         setedt = {setedit}></Employee_TextFields>
         <Employee_Display_Data list={data} remove={removeItem}
         setedt = {setedit}></Employee_Display_Data>
     </>
  )
}
