import { useForm } from "react-hook-form";

import mail from "../assets/mail.mp4";
import { FiArrowRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex text-[#e1d5b7] mb-16">
      <div className="flex flex-row items-end">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-start p-12 pr-72 bg-[rgb(94,69,235)]/60 backdrop-blur-md border-4 rounded-xl border-[#1b1059] space-y-5"
        >
          <p className=" whitespace-nowrap font-heavy text-3xl">
            Send me a{" "}
            <span className="text-4xl font-bold py-1 border-b-4 text-[#d8b867] border-[#7B68EE]">
              message
            </span>{" "}
            !
          </p>
          <div className="flex flex-col justify-start ">
            <p className="mb-2 ml-3 mt-6">Name or Company * </p>
            <input
              name="name"
              type="text"
              placeholder="Name/Company"
              {...register("name", { required: true })}
              className="border-4  border-gray-500 text-black p-2  rounded-md focus:outline-none"
            />
            {errors.name && <p>Name is required</p>}
            <p className=" mb-2 ml-3 mt-6">Email * </p>
            <input
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="border-4 border-gray-500 text-black p-2 rounded-md focus:outline-none"
            />
            {errors.email && <p>Email is required</p>}
            <p className="mb-2 ml-3 mt-6">Message * </p>
            <textarea
              name="message"
              placeholder="Message"
              {...register("message", { required: true })}
              className="border-4  border-gray-500 text-black  p-2 rounded-md focus:outline-none"
            />
            {errors.message && <p>Message is required</p>}

            <button
              className="flex flex-row justify-between bg-gradient-to-r from-purple-300 to-[#7B68EE] text-black text-sm rounded-md font-medium mx-auto py-2 px-6 my-8 w-[120px] md:w-[200px] md:text-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-200 hover:text-gray-800 hover:bg-gradient-to-r hover:from-purple-400 hover:to-[#6754DA] group"
              type="submit"
            >
              Send To Me!
              <FiArrowRight className="h-7 group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center h-[70%] w-[40%] px-16 -ml-32 -mb-4 p-8 z-40 text-black rounded-2xl  bg-[#e1d5b7] border-8 border-[#7B68EE]">
          <h2 className="font-bold text-xl font-sans md:text-2xl  p-2 bg-gradient-to-r from-black/20  to-transparent backdrop-blur-sm rounded-xl w-fit">
            Let's <span className="text-[#7B68EE]"> Collaborate</span>!
          </h2>
          <p className="text-slate-800 text-center text-lg md:text-xl z-40 -mb-3">
            Have an idea?
          </p>

          <video autoPlay muted loop className="h-[80%] w-[80%] ml-5">
            <source src={mail} type="video/mp4" />
          </video>
          <p className="text-slate-800 text-center text-lg -mt-2">
            Lets build something amazing!
          </p>
          <div className="flex flex-row">
            <MdEmail  size={48} className=" text-[#E97451] z-60 mr-2"/>
            <div className="py-3 z- 20 bg-gradient-to-r from-[#e3a18d] to-transparent backdrop-blur-sm rounded-xl">
                <span className="px-3">Ueharaneal@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
