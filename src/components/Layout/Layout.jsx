

import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { StickyContact } from "../utilities/StickyContact";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <section className={"bg-customBlack pb-[100px]"}>{children}</section>
      <Footer />
      <StickyContact />
    </>
  );
};

export default Layout;
