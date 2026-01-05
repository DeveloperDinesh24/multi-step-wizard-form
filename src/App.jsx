import './App.css'
import Step1_Personal from './Components/Step1_Personal'

function App() {
  

  
  return (
    <div className='w-full min-h-full bg-sky-200 flex justify-center'>
      <main className='w-220 h-fit mt-16 p-6 bg-indigo-400'>
        <h1 className='text-4xl'>Step 1- Personal Details</h1>
        <hr className='my-4' />
        <form className='flex flex-col gap-16 mt-24'>
          <Step1_Personal />
        </form>
      </main>
    </div>
  )
}

export default App
