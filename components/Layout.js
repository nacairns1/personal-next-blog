import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className=" min-h-screen min-w-full relative pb-12 pt-20">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
