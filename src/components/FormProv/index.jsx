import { useState } from 'react';
import assets from '../../assets/form.svg';
import provinces from '../../utils/constants/provinces.js';

const FormProv = ({ updateProvinces }) => {
  const [provinsi, setProvinsi] = useState('');
  const [status, setStatus] = useState('');
  const [jumlah, setJumlah] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProvinces(provinsi, status, jumlah);
    alert('Data successfully updated!');
    setProvinsi('');
    setStatus('');
    setJumlah('');
  };

  return (
    <section id='form' className='pt-12 pb-12'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Image Section */}
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8'>
            <div className='relative'>
              <img
                src={assets}
                alt='Nurse'
                className='mx-auto max-w-full rounded-lg shadow-lg'
              />
            </div>
          </div>

          {/* Form Section */}
          <div className='w-full lg:w-1/2'>
            <h1 className='text-4xl font-bold text-primary mb-8 text-center lg:text-left'>
              Form Covid
            </h1>
            <form
              onSubmit={handleSubmit}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <div className='mb-5'>
                <label className='block mb-2 text-sm font-medium text-primary'>
                  Provinsi
                </label>
                <select
                  value={provinsi}
                  onChange={(e) => setProvinsi(e.target.value)}
                  className='bg-white border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5'
                  required
                >
                  <option value=''>Pilih Provinsi</option>
                  {provinces.map((province) => (
                    <option key={province.kota} value={province.kota}>
                      {province.kota}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mb-5'>
                <label className='block mb-2 text-sm font-medium text-primary'>
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className='bg-white border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5'
                  required
                >
                  <option value=''>Pilih Status</option>
                  <option value='kasus'>Kasus</option>
                  <option value='sembuh'>Sembuh</option>
                  <option value='meninggal'>Meninggal</option>
                  <option value='dirawat'>Dirawat</option>
                </select>
              </div>

              <div className='mb-5'>
                <label className='block mb-2 text-sm font-medium text-primary'>
                  Jumlah
                </label>
                <input
                  type='number'
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  className='bg-white border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormProv;
