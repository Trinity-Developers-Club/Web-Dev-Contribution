import React from 'react'

const Spinner = () => {
  return (
    <div class=" flex flex-col items-center space-y-2 ">
        <div className="spinner"></div>
        <p class="text-gray text-lg font-semibold "> Loading...</p>
    </div>
  )
}

export default Spinner;
