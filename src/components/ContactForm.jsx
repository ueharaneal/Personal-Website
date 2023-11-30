import { useState } from 'react'
import { useForm } from 'react-hook-form'


function ContactForm() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    }
  return (
    <div className='flex  text-[#EBE4D1]'>
        <div className='flex flex-row'>
            <form
            onSubmit={handleSubmit(onSubmit)}
             className='flex flex-col justify-start p-20 bg-[#7B68EE] border-4 my-4 border-[#1b1059] space-y-5 text-black'>
                <p className='font-heavy text-3xl'>Send me a message!</p>
                <div className='flex flex-col justify-start space-y-5'>
                    <input
                        name="name"
                        type="text"
                        placeholder= "Name/Company"
                        {...register("name", {required:true})}
                    />
                    {errors.name && <p>Name is required</p>}
                    <input
                        name="email"
                        type="email"
                        placeholder= "Email Address"
                        {...register("email",{required:true})}
                    />
                    {errors.email && <p>Email is required</p>}
                    <textarea
                        name="message"
                        placeholder= "Message"
                        {...register( "message",{ required: true})}
                    />
                    {errors.message && <p>Message is required</p>}
                    
                    <button type="submit">Send Message</button>
                </div>

            </form>
            <div className="flex flex-col -mt-[50%] -mr-[-50%] p-23  bg-white">
                <h2>Lets Collaborate</h2>

            </div>
        </div>
    </div>
  )
}

export default ContactForm
