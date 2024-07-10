import Global from '../../components/Global';
import Hero from '../../components/Hero';
import Province from '../../components/Province';

const IndonesiaPage = () => {
  return (
    <div>
      <Hero />
      <Global
        title='Indonesia Situation'
        title1='Data Covid Berdasarkan Indonesia'
      />
      <Province />
    </div>
  );
};

export default IndonesiaPage;
