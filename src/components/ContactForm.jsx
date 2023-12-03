
import { useForm } from 'react-hook-form'

import squares from '../assets/squares.mp4'


function ContactForm() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    }
  return (
    <div className='flex text-[#EBE4D1]'>
        <div className='flex flex-row items-end'>
            <form
            onSubmit={handleSubmit(onSubmit)}
             className='flex flex-col justify-start p-20 bg-[rgb(94,69,235)]/60 backdrop-blur-md border-4 border-[#1b1059] space-y-5'>
                <p className=' whitespace-nowrap font-heavy text-3xl'>Send me a <span className='text-4xl font-bold py-1 border-b-4 border-[#7B68EE]'>message</span> !</p>
                <div className='flex flex-col justify-start space-y-5'>
                    <p className='-mb-2 ml-3'>Name or Company * </p>
                    <input
                        name="name"
                        type="text"
                        placeholder= "Name"
                        {...register("name", {required:true})}
                        className='border-4  border-gray-500 text-black p-2 rounded-md focus:outline-none'
                    />
                    {errors.name && <p>Name is required</p>}
                    <p className='-mb-2 ml-3'>Email * </p>
                    <input
                        name="email"
                        type="email"
                        placeholder= "Email"
                        {...register("email",{required:true})}
                    />
                    {errors.email && <p>Email is required</p>}
                    <p className='-mb-2 ml-3'>Message * </p>
                    <textarea
                        name="message"
                        placeholder= "Message"
                        {...register( "message",{ required: true})}
                    />
                    {errors.message && <p>Message is required</p>}
                    
                    <button type="submit">Send Message</button>
                </div>

            </form>
            <div className="flex flex-col h-[50%] w-[40%] -ml-16 -mb-4 p-8 z-40 text-black rounded-md bg-[#EBE4D1]">
                <h2>Lets Collaborate</h2>
                <p>Email<span>Ueharaneal@gmail.com</span></p>
                <video autoPlay muted loop className='h-[50%] w-[50%]'> 
                    <source src={squares} type="video/mp4"/>
                </video>
                

            </div>
        </div>
    </div>
  )
}

export default ContactForm
