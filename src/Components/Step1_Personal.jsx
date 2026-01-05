import { useState } from 'react'

export default function Step1_Personal() {
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
    <>
      <div className='w-full h-fit pb-2 flex justify-center gap-8'>
        <div className='flex flex-col gap-1 w-1/2'>
          <label htmlFor='first-name' className='text-xl'>
            First Name
          </label>
          <input
            onChange={handleFirstNameChange}
            type='text'
            id='first-name'
            name='first-name'
            value={formData.firstName}
            className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-1 w-1/2'>
          <label htmlFor='last-name' className='text-xl'>
            Last Name
          </label>
          <input
            onChange={handleSecondNameChange}
            type='text'
            id='last-name'
            name='last-name'
            value={formData.lastName}
            className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <label htmlFor='dob' className='text-xl'>
          Date of Birth
        </label>
        <input
          onChange={handleDateOfBirthChange}
          type='date'
          className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
        />
      </div>
      <fieldset className=''>
        <legend className='text-xl mb-1'>Gender</legend>
        <div className='w-full items-center flex gap-4'>
          <div className='w-1/3 h-10 flex items-center gap-1 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'>
            <input
              type='radio'
              name='gender'
              id='male-gender'
              value='male'
              className='accent-indigo-600'
            />
            <label htmlFor='male-gender'>Male</label>
          </div>
          <div className='w-1/3 h-10 flex items-center gap-1 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'>
            <input
              type='radio'
              name='gender'
              id='female-gender'
              value='female'
              className='accent-indigo-600'
            />
            <label htmlFor='female-gender'>Female</label>
          </div>
          <div className='w-1/3 h-10 flex items-center gap-1 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'>
            <input
              type='radio'
              name='gender'
              id='other-gender'
              value='other'
              className='accent-indigo-600'
            />
            <label htmlFor='other-gender'>Other</label>
          </div>
        </div>
      </fieldset>
      <div className='w-full h-fit pb-2 flex justify-center gap-8'>
        <div className='flex flex-col gap-1 w-1/2'>
          <label htmlFor='email' className='text-xl'>
            Email
          </label>
          <input
            onChange={handleEmailChange}
            type='email'
            id='email'
            name='email'
            value={formData.email}
            className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-1 w-1/2'>
          <label htmlFor='mobile-number' className='text-xl'>
            Mobile Number
          </label>
          <input
            onChange={handleMobileNumberChange}
            type='text'
            id='mobile-number'
            name='mobile-number'
            value={formData.mobileNumber}
            className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
          />
        </div>
      </div>

      <div className='self-end flex gap-4 items-center'>
        <button
          onClick={handleReset}
          type='reset'
          className='text-xl w-fit px-2 py-1 bg-red-600 text-red-50 cursor-pointer rounded-md'
        >
          Reset
        </button>
        <button className='text-2xl w-fit px-4 py-1 bg-green-600 text-green-50 cursor-pointer rounded-md'>
          Next
        </button>
      </div>
    </>
  )
}
