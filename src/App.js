import "./components/header.css"
import "./components/form.css"
import { useState } from "react";
function App() {

  const[value,setValue]=useState("");
  const[b,setb]=useState([])
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");


  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(b[index]);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const saveEdit = (index) => {
    const updatedTodos = b.map((todo, i) => 
      i === index ? editValue : todo
    );
    setb(updatedTodos);
    setEditIndex(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue("");
  };







  const handleSubmit=(e)=>{
    e.preventDefault();
    if(value.trim()){
      setb([... b,value])
      setValue("")}
    
    


  }

  const handleChange=(e)=>{
    
      setValue(e.target.value)}




  
  return (
    <>
      <div className="header">
        Todo App
      </div>
<div className="form">
      <form onSubmit={handleSubmit}>
      <label for="work">Todo: </label>
      <input type="text" id="work" name="work" value={value}    onChange={handleChange}></input>
      <input type="submit" value="Add to the list"></input>
      
      </form>

    
      <ol>
      {b.map((todo, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
              />
              <button onClick={() => saveEdit(index)}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              {todo} <button onClick={() => startEditing(index)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ol>

     {
      //   b.map((a,index)=>(
      //   <li key={index}>{a}</li>
      //  ))
      
      }
    

      

    {
      // b.map((a,index)=>(
      // <form key={index} onSubmit={handleSubmit}>
      // <label for="work"></label>
      // <input type="text" id="work" name="work" value={a}    onChange={handleChange}></input>
      // <input type="submit" value=" "></input>
      
      // </form>
      // ))


    
    }
    
    

      </div>


    </>
  );
}

export default App;
