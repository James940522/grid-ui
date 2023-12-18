import GridContainer from "./grid-container"
import "./index.css"
function App() {
  return (
    <main className='bg-zinc-800  min-h-screen w-full'>
      <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center p-2'>
        <h1 className='text-3xl'>Hello Wolrd ;)</h1>
        <GridContainer />
      </div>
    </main>
  )
}

export default App
