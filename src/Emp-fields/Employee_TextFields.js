import React, { useState , useEffect } from 'react';


export default function Employee_TextFields(props) {

     /*  here we distructuring , list hai wo pura array hai, jimse fname ,
     lanme ye sub hai & setlist bhi array ke liye hai. and edt , seredt kon
     sa index set karna hai uske liye (for edit) liya hai  */
   const {list,setlist,edt,setedt} = props;  

   
  /* yaha setData ek props hai , jisme bhi fname , lname wo sub hai ,and
  data mai jo bhi textbox mai value enter karenge wo perticular value
   store hogi.*/
   const [data, setData] = useState({fname:"" , lname:"" , city:"" , 
                                      state:""})

     useEffect(()=> {

          setData(list[edt])  // yaha humne setDta mai list ko store kiya hai.
                                   
     },[props])                                 
  
  const handle = (e)=>{
       setData({...data , [e.target.name] : e.target.value})
  }

  /* here we copied the array(which is in list) into var d. */
     const submitData =(e)=>{
        e.preventDefault();
        let d = [...list];   

        
        /* this is for edit . ager edt means edit index 0 se less hoga to d mai
        means array mai value push (add) hogi (jo value hum textbox mai 
          dalenge wo value add hogi) else , d means array & edt means index
          mai data update ker dena. so d[edt] = data */
        if(edt < 0)
        {
          d.push(data);     
        }
        else
        {
          d[edt] = data;   
        }
        setlist(d);
        setedt(-1);
        setData({fname:"" , lname:"" , city:"" , state:""})  // it is for reset the data from textbox

     }
   return (
    <div>
      <form onSubmit={submitData} className='m-2'>
        <input type='text' name='fname' placeholder='Enter First_Name' 
        onChange={handle} value={data?.fname}/>

        <input type='text' name='lname' placeholder='Enter Last_Name' 
        onChange={handle} value={data?.lname} />

        <input type='text' name='city'  placeholder='Enter City' 
        onChange={handle} value={data?.city} />

        <input type='text' name='state' placeholder='Enter State' 
        onChange={handle} value={data?.state} />     
                
        <input type='submit'  value="save" className='btn btn-danger ms-3'/>

      </form>
    </div>
  )
}
