import React, { useState } from "react";

export default function About() {
 const [mys,setMys] = useState(
  {
    backgroundColor : 'black',
    text : 'white',

  }
 )
 const toggle = ()=>{
  if(mys.backgroundColor === 'black'){
    setMys(
      {
        backgroundColor : 'white',
        text : 'black',
    
      }

    )
  }else{
    setMys(
      {
        backgroundColor : 'black',
        text : 'white',
    
      }
    )

  }
 }

  
  return (
    <div className="items-center justify-between mx-20 p-4">
      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={mys}>
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={mys}> 
          About us
        </h1>
        <p className="font-normal text-gray-700 dark:text-gray-400" style={mys}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
          consectetur. Beatae quasi officia, impedit sed molestias asperiores
          sapiente ad nam repellendus provident placeat reiciendis numquam,
          dicta perferendis ipsa. Cupiditate, magni.
        </p>
      </div>
      <button
             
                onClick={toggle} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Dark Mode
         </button>
    </div>
  
  );
}
