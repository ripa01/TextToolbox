import React,{useState} from 'react'

export default function Textform(props) {
  const handleUp = (event)=>{
    event.preventDefault();
    let new_text = text.toUpperCase();
    setText(new_text)

  } 
  const handleLow = (event)=>{
    event.preventDefault();
    let new_text = text.toLowerCase();
    setText(new_text)

  } 
  const handleClear = (event)=>{
    event.preventDefault();
    let new_text = "";
    setText(new_text)

  } 
  const handleOnChange = (event)=>{
    setText(event.target.value);

  }   

  const [text, setText] = useState("");

  return (
    <>
    <div className="items-center justify-between mx-20 p-4">
    <form>
    <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mt-6 mb-3">{props.heading}</h1>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">   
           <textarea id="comment" rows="12" value={text} onChange={handleOnChange} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your text..." required ></textarea>
       </div>
       <div className="flex items-center space-x-2 px-3 py-2 border-t dark:border-gray-600">
           <button onClick={handleUp} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Convert to UpperCase
           </button>
           <button onClick={handleLow} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Convert to LowerCase
           </button>
           <button onClick={handleClear} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Clear Text
           </button>
           
       </div>
   </div>
</form>      
    </div>

<div className="items-center justify-between mx-20 p-4">
    
<div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Text Summary</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">In your text,there are {text.split(" ").length} words and {text.length} character.</p>
<p className="font-normal text-gray-700 dark:text-gray-400"> {0.008 * text.split(" ").length} Minutes to read.</p>

<h5 className="mb-2 mt-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Preview Text</h5>
<p className="font-normal text-gray-700 dark:text-gray-400"> {text} </p>

</div>
 </div>

    </>
  )
}
