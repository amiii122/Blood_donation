
import Steps from '../../../Components/Step/index'
import { steps_data } from '../../../assets/assets'
const How_it_works = () => {
  return (
    <div className='relative bg-gray-100 flex justify-center flex-col items-center gap-12 pt-10'>
      <div className='flex flex-col items-center justify-center gap-1'>
       <h1 className='font-bold text-[22px]'>How it Works</h1>
       <div className='w-15 h-[3px] bg-red-600 rounded-full'></div>
      </div>
      <div className='flex  gap-50 z-2'>
        {
            steps_data.map((ele)=>(
                 <Steps params={ele}/>
            ))
        }
      </div>
      <div className='absolute top-[60%] w-[60vw] border-1 border-red-500 border-dotted '></div>
    </div>
  )
}

export default How_it_works
