import { useState } from 'react'
import './App.css'

function App() {
const [color , setcolor] = useState("red");
  return (
  
    <div className ="w-screen h-screen" style={{backgroundColor:color}}>
    <div className ="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className ="flex flex-wrap justify-center gap-3 shadow-lg bg- px-3 py-2 rounded-3xl decoration-black border border-black" >
        <button className ='rounded-full px-2 py-2 border border-black' style={{backgroundColor:"red"}} onClick={() => setcolor("red")}>
          Red</button>
          <button className ='rounded-full px-2 py-2 border border-black' style={{backgroundColor:"green"}} onClick={() => setcolor("green")}>
          Green</button>
          <button className ='rounded-full px-2 py-2 border border-black' style={{backgroundColor:"olive"}} onClick={() => setcolor("olive")}>
          Olive</button>
          <button className ='rounded-full px-2 py-2 border border-black ' style={{backgroundColor:"orange"}} onClick={() => setcolor("orange")}>
          Orange</button>
          <button className ='rounded-full px-2 py-2 border border-black' style={{backgroundColor:"purple"}} onClick={() => setcolor("purple")}>
          Purple</button>
          <button className ='rounded-full text-black px-2 py-2 border border-black' style={{backgroundColor:"white"}} onClick={() => setcolor("white")}>
          White</button>
          <button className ='rounded-full text-black px-2 py-2 border border-black' style={{backgroundColor:"grey"}} onClick={() => setcolor("grey")}>
          Grey</button>
      </div>
    </div>
    </div>
    
  )
}

export default App
