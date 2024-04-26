import React from 'react'

export const Button = ({label,onPress}) => {
  return (
    <button onClick={onPress} type='button' className=' px-24 text-white  bg-black hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2'>{label}</button>
  )
}
