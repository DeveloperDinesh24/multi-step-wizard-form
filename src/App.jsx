import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobileNumber: '',
  })

  const handleReset = (e) => {
    // e.preventDefault()
    setFormData({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobileNumber: '',
  })
  }

  const handleFirstNameChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        firstName: e.target.value,
      }
    })
  }
  const handleSecondNameChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        lastName: e.target.value,
      }
    })
  }
  const handleDateOfBirthChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        dateOfBirth: e.target.value,
      }
    })
  }
  const handleEmailChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        email: e.target.value,
      }
    })
  }
  const handleMobileNumberChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        mobileNumber: e.target.value,
      }
    })
  }

  return (
    <div className='w-full min-h-full bg-sky-200 flex justify-center'>
      <main className='w-220 h-fit mt-16 p-6 bg-indigo-400'>
        <h1 className='text-4xl'>Step 1- Personal Details</h1>
        <hr className='my-4' />
        <form className='flex flex-col gap-16 mt-24'>
          
        </form>
      </main>
    </div>
  )
}

export default App
