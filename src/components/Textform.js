import React from 'react'

export default function Textform(props) {
  return (
    <div class="items-center justify-between mx-20 p-4">
    <form>
    <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mt-6 mb-3">{props.heading}</h1>
   <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          
           <textarea id="comment" rows="12" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required ></textarea>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
           
       </div>
   </div>
</form>      
    </div>
  )
}
