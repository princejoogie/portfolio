import { motion } from "framer-motion";
import React from "react";
import { closeIcon as CloseIcon } from "src/assets/svgs";

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
      className="fixed inset-0 z-50 flex flex-col w-full opacity-70"
    >
      <div className="absolute inset-0 z-0 bg-black opacity-80" />

      <button
        className="absolute z-50 top-4 right-4 xl:top-10 xl:right-10 focus:outline-none group"
        onClick={() => setModalShown(false)}
      >
        <div>
          <CloseIcon className="w-6 h-6 text-gray-400 group-focus:text-white" />
        </div>
      </button>

      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 py-20">
        <div className="w-full h-full mx-auto max-w-7xl">
          <img src={src} alt={src} className="object-contain w-full h-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;
