// import Button from '../../components/Button/Button';
import Footer from '../../components/Footer';
import FormProv from '../../components/FormProv';
import Global from '../../components/Global';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar/Navbar';
import Province from '../../components/Province';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Global />
      <Province />
      <FormProv />
      <Footer />
    </div>
  );
}

export default HomePage;
