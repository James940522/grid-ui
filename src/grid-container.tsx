import React from "react"
import GirdCell from "./grid-cell"

export default function GridContainer() {
  return (
    <div className='w-full'>
      <h3>Grid Container</h3>
      <div className='h-screen flex flex-col gap-2 overflow-x-scroll scrollbar-none overflow-y-hidden flex-wrap content-start w-full border border-blue-500'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          const randomNumber = Math.floor(Math.random() * 5) + 1
          const randomHeight = Math.floor(Math.random() * 200) + 100
          const width = "25%"
          const height = randomHeight * randomNumber

          return <GirdCell key={item} width={width} height={height} />
        })}
      </div>
    </div>
  )
}
