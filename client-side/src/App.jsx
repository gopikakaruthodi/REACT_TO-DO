
import './App.css'
import{useEffect, useState} from 'react'
function App() {
  const [task,setTask]=useState("")
  const [todo,setTodo]=useState([])
  let [count,setCount]=useState(0)

  const addTask=async()=>{
    try {
      const res= await fetch("http://localhost:3000/api/addtodo",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({task})
      })
      console.log(res);
      setCount(count+=1)
      setTask("")
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchData()
  },[count])

  const fetchData=async()=>{
try {
  const res=await fetch("http://localhost:3000/api/displaytodo")
  const data=await res.json()

  setTodo([...data])

} catch (error) {
  
}
  }



const deleteTask=async(_id)=>{
  console.log(_id);
  const res=await fetch(`http://localhost:3000/api/deletetodo/${_id}`,{method:"DELETE"})
  console.log(res);
  setCount(count+=1);
  
}
console.log(todo);

  return (
    <>
      <div className="main">
        <div className="container">
          <h1>Todo Task</h1>
          <div className="add">
            <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTask}>ADD</button>
          </div>
          <ul className="content">
            {
                todo.map((td)=><li>
                  <span>{td.task}</span>
                  <button onClick={()=>deleteTask(td._id)}>Delete</button>
                </li>)
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
