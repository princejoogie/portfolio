import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ImageModalProps {
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ setModalShown, src }) => {
  return (
    <motion.div
      initial={{ marginTop: "100vh", opacity: 0 }}
      animate={{ marginTop: 0, opacity: 1 }}
      exit={{ marginTop: "100vh", opacity: 0 }}
      transition={{ type: "spring", duration: 0.7 }}
      className="fixed inset-0 z-50 flex w-full flex-col opacity-70"
    >
      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      <button
        type="button"
        className="group absolute top-4 right-4 z-50 focus:outline-none xl:top-10 xl:right-10"
        onClick={() => setModalShown(false)}
      >
        <IoClose className="h-10 w-10 text-white" />
      </button>

      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 py-20">
        <div className="mx-auto h-full w-full max-w-7xl">
          <img src={src} alt={src} className="h-full w-full object-contain" />
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;
