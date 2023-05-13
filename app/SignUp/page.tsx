import SignUpForm from './Components/SignUp/SignUpForm'
import Link from 'next/link'

const page = () => {
  return (
    <div className='h-[90vh] flex flex-col pt-2 bg-white relative'>
        <h3 className='absolute left-[50%] translate-x-[-50%] bottom-[100%] mb-4 text-3xl font-[600] z-[60] font-playfairDisplay'>Register</h3>
        <div className='flex flex-col'>
            <SignUpForm/>
            <div className='mt-2 mx-auto flex gap-4 justify-center items-center'>
                <div className='font-bold'>Already have an account?</div>
                <Link href={'/Booking'} className='text-xl font-bold text-blue-600 translate-y-[-1px]'>Sign in</Link>
            </div>
            <div className='flex items-center mt-4 w-[95%] mx-auto mb-4'>
                <div className='h-[2px] bg-black flex-1'></div>
                <span className='mx-4 font-bold text-lg'>Or sign in with</span>
                <div className='h-[2px] bg-black flex-1'></div>
            </div>
            <div className='flex flex-col gap-4 mx-8'>
                <button className='bg-black text-white font-bold py-4 rounded-md flex items-center justify-center relative'>
                    <svg className='h-5 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    Continue with Google
                </button>
                <button className='bg-black text-white font-bold py-4 rounded-md flex items-center justify-center relative'>
                    <svg className='h-6 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    Continue with Facebook
                </button>
                <button className='bg-black text-white font-bold py-4 rounded-md flex items-center justify-center relative'>
                    <svg className='h-6 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    Continue with Apple
                </button>
            </div>
        </div>
    </div>
  )
}

export default page