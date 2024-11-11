import Hero from '../../components/Hero';
import Province from '../../components/Province';
import FormProv from '../../components/FormProv';
import provincesData from '../../utils/constants/provinces';
import { useState } from 'react';

const ProvinsiPage = () => {
  const [provinces, setProvinces] = useState(provincesData);

  // Function to update provinces data
  const updateProvinces = (provinsi, status, jumlah) => {
    setProvinces((prevProvinces) => {
      return prevProvinces.map((province) => {
        if (province.kota.toLowerCase() === provinsi.toLowerCase()) {
          // Update the appropriate field based on the 'status' provided
          switch (status.toLowerCase()) {
            case 'kasus':
              return { ...province, kasus: province.kasus + parseInt(jumlah) };
            case 'sembuh':
              return {
                ...province,
                sembuh: province.sembuh + parseInt(jumlah),
              };
            case 'meninggal':
              return {
                ...province,
                meninggal: province.meninggal + parseInt(jumlah),
              };
            case 'dirawat':
              return {
                ...province,
                dirawat: province.dirawat + parseInt(jumlah),
              };
            default:
              return province;
          }
        }
        return province;
      });
    });
  };

  return (
    <div>
      <Hero />
      <Province provinces={provinces} />
      <FormProv updateProvinces={updateProvinces} />
    </div>
  );
};

export default ProvinsiPage;
