import TableRow from '../TableRow';

const Province = ({ provinces }) => {
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
              <table className='w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg shadow-md table-fixed'>
                <thead className='text-xs font-semibold text-white uppercase bg-primary'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 w-1/5 border-b border-gray-300'
                    >
                      Provinsi
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 w-1/5 border-b border-gray-300'
                    >
                      Positif
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 w-1/5 border-b border-gray-300'
                    >
                      Sembuh
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 w-1/5 border-b border-gray-300'
                    >
                      Dirawat
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 w-1/5 border-b border-gray-300'
                    >
                      Meninggal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {provinces.map((pro, index) => (
                    <TableRow
                      key={pro.kota}
                      pro={pro}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Province;
