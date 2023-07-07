import React, { useEffect, useState } from 'react';
import './App.css';
function App()  {
    const [data,setData]=useState([])
useEffect(()=>{ 
  fetch("https://api.gyanibooks.com/library/get_dummy_notes").then((result)=>{
    result.json().then((resp)=>{
     //console.warn("result",resp)
     setData(resp)
    })
})
},[])
console.warn(data)
  return (
    <div className="App">
      <button variant="contained"><h1><bold><u>THE INDEGENIOUS RECORD</u></bold></h1></button>
      <table border="20">
        <tr>
          <td><h2><u>id</u></h2></td>
          <td><h2><u>user</u></h2></td>
          <td><h2><u>Title</u></h2></td>
          <td><h2><u>category</u></h2></td>
          <td><h2><u>Notes</u></h2></td>
        </tr>
        {
          data.map((Items)=>
          <tr>
          <td>{Items.id}</td>
          <td>{Items.user}</td>
          <td>{Items.title}</td>
          <td>{Items.category}</td>
          <td>{Items.notes}</td>
        </tr>
          )
        }
      </table>
    </div>
  );
}
export default App;
