import { useState } from 'react'
import './App.css'
import Step1_Personal from './Components/Step1_Personal'
import Step2_Address from './Components/Step2_Address'

function App() {
  const [step, setStep] = useState(1)

  return (
    <div className='w-full min-h-full bg-sky-200 flex justify-center'>
      <main
        className={`w-220 ${
          step === 1 ? 'h-212' : 'h-200'
        } mt-16 p-6 bg-indigo-400`}
      >
        {step === 1 && <Step1_Personal setStep={setStep} />}
        {step === 2 && <Step2_Address setStep={setStep} />}
      </main>
    </div>
  )
}

export default App
