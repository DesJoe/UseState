import React, { useState } from 'react'




function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    console.log(count);
  };

  const decrement = () => {
    if(count>0){
      setCount(count - 1)
      
    }
    console.log(count);
  };

  function reset() {

    setCount(0)
    console.log(count);
  };


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button><br />
      <button onClick={reset}>Reset</button><br />
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App 


// import React, { useState } from 'react'



// function App() {
//   const[isOn,seIsOn]=useState(false)

//   function toggle(){
//     seIsOn(!isOn)
//   }

//   return (
//     <div>
//       <h1>{isOn?"ON":"OFF"}</h1>
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {

// const [name,setname]=useState("")
// const hanldeChange=(event)=>{
//   setname(event.target.value)
// }

//   return (
//     <div>
//       <input type="text" onChange={hanldeChange} />
//       <p >{name}</p>
//     </div>
//   )
// }

// export default App

