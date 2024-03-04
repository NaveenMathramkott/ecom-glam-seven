import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "./layoutStyle.css";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main className="layout-mainWrapper">
        <Toaster position="bottom-right" />
        {children}
      </main>

      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "E-com Glam-seven",
  description: "React JS E-com",
  keywords: "reactjs,css3,frontend,ecommerce,web-design",
  author: "naveenmathramkott",
};
export default Layout;
