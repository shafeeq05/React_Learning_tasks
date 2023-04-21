import { useState } from 'react'
import './App.css'
import Shafeeq from './Shafeeq'

let boo = false
function App() {
  
  const [count, setCount] = useState(0)
  const [color,setColor] = useState("red")
  const Increment = () => {setCount((count,color) => count + 1)}
  const Decrement = () =>{ setCount((count) => count - 1)}
  const fun = ()=>{
    if(boo){
   setColor((color)=> color="blue")
   console.log(boo);
   boo=false
    }else{
      setColor((color)=> color="red")
      console.log(boo);
      boo=true
    }
  }
  return (
   <>
    <div className="App">
     <Shafeeq/>  
      <button onClick={fun}>{color}</button>
      <div className="card">
        <button onClick={Increment}>Increment
        </button>
        <button onClick={Decrement}>Decrement
        </button>
        <input type="text" value={count} />
      </div>
    </div>
    </>
  )

}

export default App
