import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { AnimatePresence, motion } from "framer-motion";

import PopUp from "./PopUp";
import mail from "../assets/mail.mp4";
import { FiArrowRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Display Confirmation Pop up
  const [showPopUp, setShowPopUp] = useState(false);

  function handleClose() {
    setShowPopUp(false);
  }

  //emailjs
  emailjs.init("your_user_id");

  //handle submit
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm("service_d82z7rc", "contact_form", "form", "6NelhU7I6BCkzAxzh")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setShowPopUp(true);
  };

  return (
    <div className="flex text-[#e1d5b7] mb-16">
      <div className="flex flex-col md:flex-row text-[#e1d5b7] mb-16 items-center md:items-end">
        <motion.form
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: -100, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-start p-6 md:p-12 w-full md:w-auto md:pr-72 bg-[rgb(94,69,235)]/60 backdrop-blur-md border-4 rounded-xl border-[#1b1059] space-y-5"
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
            {errors.name && <p className="font-medium text-red-500">Name is required</p>}
            <p className=" mb-2 ml-3 mt-6">Email * </p>
            <input
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="border-4 border-gray-500 text-black p-2 rounded-md focus:outline-none"
            />
            {errors.email && <p className="font-medium text-red-500">Email is required</p>}
            <p className="mb-2 ml-3 mt-6">Message * </p>
            <textarea
              name="message"
              placeholder="Message"
              {...register("message", { required: true })}
              className="border-4  border-gray-500 text-black  p-2 rounded-md focus:outline-none"
            />
            {errors.message && <p className="font-medium text-red-500">Message is required</p>}

            <button
              className="flex flex-row justify-between bg-gradient-to-r from-purple-300 to-[#7B68EE] text-black text-sm rounded-md font-medium mx-auto py-2 px-6 my-8 w-[120px] md:w-[200px] md:text-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-200 hover:text-gray-800 hover:bg-gradient-to-r hover:from-purple-400 hover:to-[#6754DA] group"
              type="submit"
            >
              Send To Me!
              <FiArrowRight className="h-7 group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
        </motion.form>
        <motion.div
          initial={{ x: 100, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center w-full md:w-[40%] px-6 md:px-16 mt-10 md:mt-0 md:-ml-32 md:-mb-4 p-8 text-black rounded-2xl bg-[#e1d5b7] border-8 border-[#7B68EE] z-50"
        >
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
            <MdEmail size={48} className=" text-[#E97451] z-60 mr-2" />
            <div className="py-3 z- 20 bg-gradient-to-r from-[#e3a18d] to-transparent backdrop-blur-sm rounded-xl">
              <span className="px-3">Ueharaneal@gmail.com</span>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {showPopUp && <PopUp onClose={handleClose} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ContactForm;
