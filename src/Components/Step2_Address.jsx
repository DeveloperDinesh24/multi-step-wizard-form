export default function Step2_Address({ setStep }) {
  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep(prev => prev - 1)
  }

  return (
    <>
      <h1 className='text-4xl'>Step 2- Address</h1>
      <hr className='my-4' />
      <form className='flex h-3/4 flex-col gap-16 justify-between mt-24'>
        <div className='grid md:grid-cols-2 gap-6 '>
          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor='address-first-line' className='text-xl'>
              Address Line 1
            </label>
            <input
              type='text'
              id='address-first-line'
              name='address-first-line'
              className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor='address-second-line' className='text-xl'>
              Address Line 2
            </label>
            <input
              type='text'
              id='address-second-line'
              name='address-second-line'
              className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-1 w-4/5'>
            <label htmlFor='city-name' className='text-xl'>
              City/Village/Town
            </label>
            <input
              type='text'
              id='city-name'
              name='city-name'
              className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-1 w-4/5'>
            <label htmlFor='state' className='text-xl'>
              State
            </label>
            <input
              type='text'
              id='state'
              name='state'
              className='w-full h-10 text-xl px-2 outline-2 outline-indigo-700 bg-[#ffffff77] rounded-lg'
            />
          </div>
        </div>

        <div className='self-end flex w-full justify-between items-center'>
          <button 
          onClick={prevStep}
          className="w-fit px-4 py-1 cursor-pointer bg-indigo-700 rounded text-xl text-indigo-200">
            Back
          </button>
          <div className="flex gap-4 items-center">
            <button
              type='reset'
              className='text-xl w-fit  px-2 py-1 bg-red-600 text-red-50 cursor-pointer rounded-md'
            >
              Reset
            </button>
            <button
              onClick={nextStep}
              className='text-2xl w-fit px-4 py-1 cursor-pointer bg-green-600 text-green-50 cursor-pointer rounded-md'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
