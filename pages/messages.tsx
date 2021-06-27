import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { closeIcon as CloseIcon } from "src/assets/svgs";
import Layout from "src/components/layouts/Layout";
import { Message } from "src/types";
import { auth, db, firebase } from "src/utils/firebase";

const messages: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<firebase.User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );

    let msgListener: firebase.Unsubscribe;
    const authListener = auth.onAuthStateChanged((user) => {
      if (user) {
        msgListener = db
          .collection("messages")
          .orderBy("timestamp")
          .onSnapshot((snapshot) => {
            setMessages(
              snapshot.docs.map(
                (doc) => ({ id: doc.id, ...doc.data() } as Message)
              )
            );

            setLoading(() => false);
          });
      } else {
        setMessages([]);
        setLoading(() => false);
      }
      setUser(user);
    });

    return () => {
      authListener();
      msgListener();
    };
  }, []);

  return (
    <Layout
      seo={{
        title: "Messages",
        description: "Portfolio Messages",
        twitter: {
          site: "https://princecaarlo.tech/",
          cardType: "summary_large_image",
          handle: "@princecaarlo",
        },
      }}
    >
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : !user ? (
        <Login />
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <p className="mb-4 text-gray-400">
              Signed in as: <span className="text-gray-200">{user.email}</span>
            </p>

            <button
              onClick={() => auth.signOut()}
              className="text-sm text-blue-500 active:opacity-50 focus:outline-none"
            >
              Sign out
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {messages.map((msg) => (
              <MessageItem msg={msg} />
            ))}
          </div>
        </div>
      )}

      <div className="h-[512px] w-full" />
    </Layout>
  );
};

interface MsgProps {
  msg: Message;
}

const MessageItem: React.FC<MsgProps> = ({ msg }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouse = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    if (e.button === 2) {
      db.collection("messages").doc(id).update({ opened: false });
    } else {
      db.collection("messages").doc(id).update({ opened: true });
    }
  };

  const deleteMsg = (id: string) => {
    db.collection("messages").doc(id).delete();
  };

  return (
    <motion.div
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      onMouseDown={(e) => handleMouse(e, msg.id!)}
      className="relative p-4 mt-2 bg-black rounded group"
      key={msg.id}
    >
      <AnimatePresence>
        {!msg.opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute w-3 h-3 bg-green-500 rounded-full -top-1 -left-1"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hovering && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={() => deleteMsg(msg.id!)}
            className="absolute top-2 right-2 focus:outline-none"
          >
            <CloseIcon className="w-3 h-3 active:opacity-50" />
          </motion.button>
        )}
      </AnimatePresence>

      <h3 className="text-lg text-white">{msg.name}</h3>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{msg.email}</p>
        <button className="focus:outline-none active:opacity-50">
          <p className="text-xs text-blue-500">See more</p>
        </button>
      </div>
      <div className="w-full h-px my-2 bg-gray-800" />
      <h4 className="text-white line-clamp-4">{msg.message}</h4>
    </motion.div>
  );
};

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={login}>
        {!!error && (
          <p className="w-full max-w-md text-xs text-center text-red-500">
            {error}
          </p>
        )}
        <p className="w-full max-w-md mt-4 text-sm text-gray-400">
          Email Address
        </p>
        <input
          type="email"
          placeholder="john@email.com"
          className="w-full max-w-md px-4 py-2 mt-1 text-white placeholder-gray-600 bg-black border border-black rounded focus:border-blue-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="w-full max-w-md mt-4 text-sm text-gray-400">Password</p>
        <input
          type="password"
          className="w-full max-w-md px-4 py-2 mt-1 text-white placeholder-gray-600 bg-black border border-black rounded focus:border-blue-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="mt-4 focus:outline-none" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default messages;
