import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className=" min-h-screen min-w-full relative pt-20 pb-20">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
