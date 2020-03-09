import React, {useState} from 'react';

function App() {
  const [val,setVal]  = useState(0)

  return (
    <div className = "App">
    <p>{val}</p>
    <button onClick = {()=>setVal(val+1)}> Count </button>
    </div>
  )
}

export default App;