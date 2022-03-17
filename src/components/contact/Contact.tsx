import React, { useState } from "react";
import { Message } from "src/types";
import { db, timestamp } from "src/utils/firebase";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Confetti from "react-confetti";
import { AnimatePresence, motion } from "framer-motion";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const isValid = () => {
    if (!!email.trim() && !!message.trim()) return true;
    return false;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(() => true);
    if (!!email.trim() && !!message.trim()) {
      await db.collection("messages").add({
        name: !!name ? name : "Anonymous",
        email,
        message,
        opened: false,
        timestamp: timestamp(),
      } as Message);

      setShowConf(() => true);
      setTimeout(() => {
        setShowConf(() => false);
      }, 3500);
      setLoading(() => false);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setLoading(() => false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h1
        data-aos="fade-right"
        className="text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl"
      >
        Let's Keep in Touch.
      </h1>

      <div
        data-aos="zoom-out"
        data-aos-delay={`${1 * 100}`}
        className="relative flex flex-col w-full px-4 py-4 mt-8 md:flex-row md:px-6 md:py-16 xl:px-10 xl:py-24"
      >
        <AnimatePresence>
          {showConf && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Confetti className="w-full h-full" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 flex justify-end opacity-50 rounded-xl bg-gradient-to-br from-startpoint via-midpoint to-startpoint">
          <img
            src="/assets/logos/contact.svg"
            className="self-end hidden object-contain h-full md:block xl:w-2/3"
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="z-10 flex flex-col justify-center flex-1 h-full mb-3 mr-0 md:mr-6 md:mb-0"
        >
          <div
            data-aos="fade-right"
            data-aos-delay={`${2 * 50}`}
            className="flex flex-col items-start w-full md:items-end"
          >
            <p className="w-full max-w-md text-sm text-gray-400 ">Your Name</p>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full max-w-md px-4 py-2 mt-1 text-white placeholder-gray-600 bg-gray-900 border border-gray-900 rounded focus:border-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay={`${3 * 50}`}
            className="flex flex-col items-start w-full md:items-end"
          >
            <p className="w-full max-w-md mt-4 text-sm text-gray-400">
              Email Address *
            </p>
            <input
              type="email"
              placeholder="john@email.com"
              className="w-full max-w-md px-4 py-2 mt-1 text-white placeholder-gray-600 bg-gray-900 border border-gray-900 rounded focus:border-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay={`${4 * 50}`}
            className="flex flex-col items-start w-full md:items-end"
          >
            <p className="w-full max-w-md mt-4 text-sm text-gray-400">
              Your Message *
            </p>
            <textarea
              rows={5}
              placeholder="Hi There!"
              className="w-full max-w-md px-4 py-2 mt-1 text-white placeholder-gray-600 bg-gray-900 border border-gray-900 rounded resize-none focus:border-blue-600"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay={`${5 * 50}`}
            className="flex flex-col items-start w-full md:items-end"
          >
            <button
              disabled={!isValid() || loading}
              type="submit"
              className={`w-full max-w-md px-4 py-2 mt-6 transition-all bg-blue-600 rounded duration-400 focus:outline-none ${
                !isValid() || loading
                  ? "cursor-not-allowed opacity-40"
                  : "active:bg-blue-600 hover:bg-blue-500 opacity-100"
              }`}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </form>

        <div className="z-10 flex flex-col items-center justify-center flex-1 mt-3 ml-0 md:items-start md:ml-6 md:mt-0">
          <h3
            data-aos="fade-left"
            data-aos-delay={`${2 * 50}`}
            className="text-xl md:text-2xl"
          >
            Interested in working
          </h3>
          <h3
            data-aos="fade-left"
            data-aos-delay={`${2 * 50}`}
            className="text-xl md:text-2xl"
          >
            together?
          </h3>

          <p
            data-aos="fade-left"
            data-aos-delay={`${3 * 50}`}
            className="mt-4 text-gray-400"
          >
            (+63) 945-798-5711
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay={`${4 * 50}`}
            className="text-gray-400"
          >
            princejoogie@gmail.com
          </p>

          <div
            data-aos="fade-left"
            data-aos-delay={`${5 * 50}`}
            className="flex mt-4 space-x-3"
          >
            <a target="_blank" href="https://github.com/princejoogie/">
              <AiFillGithub className="w-6 h-6 text-white" />
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/princejoogie/">
              <AiFillLinkedin className="w-6 h-6 text-white" />
            </a>

            <a target="_blank" href="https://www.instagram.com/princecaarlo/">
              <AiFillInstagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
