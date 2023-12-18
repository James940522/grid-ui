import React from "react"

type PropsType = {
  width: number | string
  height: number | string
}

export default function GirdCell({ width, height }: PropsType) {
  return (
    <div
      style={{ width, height }}
      className='flex justify-center items-center border border-white rounded-sm bg-[#8B5CF6] shadow-lg'
    >
      Grid Cell
    </div>
  )
}
