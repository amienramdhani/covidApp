import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
