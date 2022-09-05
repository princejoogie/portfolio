import { ReactNode } from "react";
import Footer from "./footer";
import NavBar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="mx-auto mb-10 min-h-screen w-full max-w-screen-xl px-4">
        <NavBar />
        {children}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
