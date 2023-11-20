import React from 'react'

export const FormInput = ({props}) => {
  return (
    <div class="flex space-x-12 items-center">
      <div>{props.title+': '}</div>
      <div class="w-[400px] h-[45px] bg-zinc-300 rounded-[10px] border border-black"></div>
    </div>
  )
}
