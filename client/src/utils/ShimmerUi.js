import React from 'react'

const ShimmerUi = () => {
  return (
    <div className="flex gap-4 mt-14 overflow-x-auto">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="w-40 h-60 bg-gray-300  animate-pulse"></div>
      ))}
    </div>
  )
}

export default ShimmerUi