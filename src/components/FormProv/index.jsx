import assets from '../../assets/form.svg';

const FormProv = () => {
  return (
    <section id='form' className='pt-12 pb-12'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full self-end px-4 lg:w-1/2 hidden lg:block'>
            <div className='relative mt-10 lg:right-0 lg:mt-9'>
              <img src={assets} alt='Nurse' className='mx-auto max-w-full' />
            </div>
          </div>
          <div className='w-full self-center px-20 lg:w-1/2'>
            <h1 className='mb-8 block text-4xl font-bold text-primary md:text-xl lg:text-5xl'>
              Form Covid
            </h1>
            <form className='max-w-sm mx-auto'>
              <div className='mb-5'>
                <label className='block mb-2 text-sm font-medium text-primary'>
                  Provinsi
                </label>
                <input
                  type='text'
                  className='bg-white border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5'
                />
              </div>
              <div className='mb-5'>
                <label className='block mb-2 text-sm font-medium text-primary'>
                  Status
                </label>
                <input
                  type='text'
                  className='bg-white border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5'
                />
              </div>
              <div className='mb-5'>
                <label className='block mb-2 text-sm font-medium text-primary'>
                  Jumlah
                </label>
                <input
                  type='number'
                  className='bg-white border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5'
                />
              </div>

              <button
                type='submit'
                className='text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
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
