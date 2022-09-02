import React, { useState } from "react";
import { Message } from "src/types";
import { db, timestamp } from "src/utils/firebase";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Confetti from "react-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { socials } from "../../utils/constants";

const trimString = (u: unknown) => (typeof u === "string" ? u.trim() : u);

const schema = z.object({
  name: z.preprocess(trimString, z.string()),
  email: z.preprocess(trimString, z.string().min(3).email()),
  message: z.preprocess(trimString, z.string().min(3)),
});

type FormData = z.infer<typeof schema>;

const Contact: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });
  const [loading, setLoading] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const onSubmit = handleSubmit(async ({ message, email, name }) => {
    setLoading(() => true);
    try {
      await db.collection("messages").add({
        name: name ?? "Anonymous",
        email,
        message,
        opened: false,
        timestamp: timestamp(),
      } as Message);
      toast.success("Message sent successfully!");

      setShowConf(() => true);
      setTimeout(() => {
        setShowConf(() => false);
      }, 3500);
      reset();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      toast.error("Something went wrong.");
    }
    setLoading(() => false);
  });

  return (
    <div className="flex w-full flex-col">
      <h2 className="text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
        Let&apos;s Keep in Touch.
      </h2>

      <div className="relative mt-8 flex w-full flex-col px-4 py-4 md:flex-row md:px-6 md:py-16 xl:px-10 xl:py-24">
        <AnimatePresence>
          {showConf && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Confetti className="h-full w-full" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 flex justify-end rounded-xl bg-gradient-to-br from-startpoint via-midpoint to-startpoint opacity-50">
          <img
            alt="contact background"
            src="/assets/logos/contact.svg"
            className="hidden h-full self-end object-contain md:block xl:w-2/3"
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="z-10 mb-3 mr-0 flex h-full flex-1 flex-col justify-center md:mr-6 md:mb-0"
        >
          <div className="flex w-full flex-col items-start md:items-end">
            <p className="w-full max-w-md text-sm text-gray-400 ">Your Name</p>
            <input
              {...register("name")}
              placeholder="John Doe"
              className="mt-1 w-full max-w-md rounded border border-gray-900 bg-gray-900 px-4 py-2 text-white placeholder-gray-600 focus:border-blue-600"
            />
            {errors.name && (
              <p className="mt-1 text-xs italic text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col items-start md:items-end">
            <p className="mt-4 w-full max-w-md text-sm text-gray-400">
              Email Address *
            </p>
            <input
              {...register("email")}
              placeholder="john@email.com"
              className="mt-1 w-full max-w-md rounded border border-gray-900 bg-gray-900 px-4 py-2 text-white placeholder-gray-600 focus:border-blue-600"
            />
            {errors.email && (
              <p className="mt-1 text-xs italic text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col items-start md:items-end">
            <p className="mt-4 w-full max-w-md text-sm text-gray-400">
              Your Message *
            </p>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Hi There!"
              className="mt-1 w-full max-w-md resize-none rounded border border-gray-900 bg-gray-900 px-4 py-2 text-white placeholder-gray-600 focus:border-blue-600"
            />
            {errors.message && (
              <p className="mt-1 text-xs italic text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col items-start md:items-end">
            <button
              disabled={!isValid || loading}
              type="submit"
              className={`duration-400 mt-6 w-full max-w-md rounded bg-blue-600 px-4 py-2 transition-all focus:outline-none ${
                !isValid || loading
                  ? "cursor-not-allowed opacity-40"
                  : "opacity-100 hover:bg-blue-500 active:bg-blue-600"
              }`}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </form>

        <div className="z-10 mt-3 ml-0 flex flex-1 flex-col items-center justify-center md:ml-6 md:mt-0 md:items-start">
          <h3 className="text-xl md:text-2xl">Interested in working</h3>
          <h3 className="text-xl md:text-2xl">together?</h3>

          <p className="mt-4 text-gray-400">(+63) 945-798-5711</p>
          <p className="text-gray-400">princejoogie@gmail.com</p>

          <div className="mt-4 flex space-x-3">
            <a target="_blank" href={socials.github} rel="noreferrer">
              <AiFillGithub className="h-6 w-6 text-white" />
            </a>

            <a target="_blank" href={socials.linkedin} rel="noreferrer">
              <AiFillLinkedin className="h-6 w-6 text-white" />
            </a>

            <a target="_blank" href={socials.instagram} rel="noreferrer">
              <AiFillInstagram className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
