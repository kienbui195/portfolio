import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
