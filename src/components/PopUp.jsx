import { useEffect } from "react";
import { MdCancel } from "react-icons/md";

import {motion } from 'framer-motion'

function PopUp({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  //Automatic onClose
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed flex flex-row p-3 rounded-lg bg-[#90ee90] text-black font-bold top-[7%] right-[7%] "
    >
      Message succesfully sent!
      <button onClick={handleClose} className="ml-2 p-2">
        <MdCancel />
      </button>
    </motion.div>
  );
}

export default PopUp;
