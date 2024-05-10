import provinces from '../../utils/constants/provinces';
import TableRow from '../TableRow';

const Province = () => {
  const prov = provinces;
  return (
    <section id='provinsi' className='bg-white pb-32 pt-36'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-16 max-w-4xl text-center'>
            <h4 className='mb-2 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl'>
              Provinsi
            </h4>
            <p className='text-md font-medium text-secondary md:text-lg'>
              Data Covid Berdasarkan Provinsi
            </p>

            <div className='relative overflow-x-auto mt-10'>
              <table className='w-full text-sm text-left rtl:text-right text-secondary lg:table-auto'>
                <thead className='text-xs text-white uppercase bg-primary'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Provinsi
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Positif
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Sembuh
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Dirawat
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Meninggal
                    </th>
                  </tr>
                </thead>
                {/* Untuk Table Body */}
                {/* looping data covid provinsi dengan maps */}
                {prov.map(function (pro) {
                  return <TableRow key={pro.kota} pro={pro} />;
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Province;
