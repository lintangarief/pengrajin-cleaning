import React from 'react'

function Card(props) {
  return (
   

<div class="max-w-m rounded overflow-hidden shadow-lg  bg-white">
  <img class="w-full bg-black" src={props.url}></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.title}</div>
    <p class="text-gray-500 text-m font-medium">
    {props.decs}
    </p>
  </div>
</div>
  )
}

export default Card